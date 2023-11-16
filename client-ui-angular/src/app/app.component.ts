import { Component, Inject, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import {
  catchError,
  combineLatest,
  debounceTime,
  exhaustMap,
  filter,
  fromEvent,
  interval,
  map,
  of,
  startWith,
  Subject,
  takeUntil,
  tap
} from 'rxjs';
import { DOCUMENT } from '@angular/common';

import { CoffeeService } from '@app/core/api/services';
import { Coffee } from '@app/core/api/interfaces';
import { ListItemRenderer } from '@list/core/interfaces';
import { CoffeeRendererComponent } from '@app/coffee-renderer/coffee-renderer.component';
import { ListComponent } from '@list/list.component';
import { COFFEE_GETTING_INTERVAL } from '@app/core/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  oneModeCoffee$: Subject<void> = new Subject();
  coffeeItems: Coffee[] = [];
  coffeeRenderer: Type<ListItemRenderer<Coffee>> = CoffeeRendererComponent;
  coffeeItemHeightPx = 420;
  coffeeViewHeightPx = 420;
  coffeeTrackBy: (i: number, item: Coffee) => number | string = (i: number, item: Coffee) => item.id;
  isLoading = false;

  @ViewChild('coffeeList', { static: false, read: ListComponent }) private coffeeList: ListComponent<Coffee>;

  private destroy$: Subject<void> = new Subject();

  constructor(
    private coffeeService: CoffeeService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.overrideCoffeeViewOnResize();
    this.processCoffeeGetting();
  }

  private overrideCoffeeViewOnResize() {
    this.coffeeViewHeightPx = this.document.documentElement.clientHeight;
    fromEvent(window, 'resize')
      .pipe(debounceTime(200), takeUntil(this.destroy$))
      .subscribe(() => {
        this.coffeeViewHeightPx = this.document.documentElement.clientHeight;
      });
  }

  private processCoffeeGetting(): void {
    const getCoffeeOnClick$ = this.oneModeCoffee$.asObservable()
      .pipe(startWith(0), map(() => Date.now()));
    const getCoffeeOnInterval$ = interval(COFFEE_GETTING_INTERVAL)
      .pipe(startWith(0), map(() => Date.now()));
    combineLatest([getCoffeeOnClick$, getCoffeeOnInterval$]).pipe(
      map(([clickTimestamp, intervalTimestamp]) => {
        if (clickTimestamp >= intervalTimestamp) {
          // it is the click event
          return { event: 'click' };
        }
        // it is the interval event (ignore if there was a click recently)
        return intervalTimestamp - clickTimestamp > COFFEE_GETTING_INTERVAL
          ? { event: 'interval' }
        : { event: null };
      }),
      filter(data => !!data.event),
      // ignore if the click occurred immediately after the interval
      debounceTime(200),
      tap(() => { this.isLoading = true; }),
      // ignore if the previous request is not completed
      exhaustMap(data => {
        // generate fake coffee ID
        const id = this.coffeeItems.length + 1;
        return this.coffeeService.get(id).pipe(
          catchError(() => of(null)),
          map((coffee: Coffee) => ({ ...data, coffee }))
        )
      }),
      filter(data => !!data.coffee),
      takeUntil(this.destroy$)
    ).subscribe((data: { event: string, coffee: Coffee }) => {
      // change the link of items to detect changes
      this.coffeeItems = [...this.coffeeItems, data.coffee];
      this.isLoading = false;
      if (data.event === 'click') {
        // scroll to the added element if the action was initiated by the user
        setTimeout(() => this.coffeeList.scrollToIndex(this.coffeeItems.length - 1));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
