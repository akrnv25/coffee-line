import { Component, Inject, OnDestroy, OnInit, Type } from '@angular/core';
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
import { ItemRenderer } from '@list/core/interfaces';
import { CoffeeRendererComponent } from '@app/coffee-renderer/coffee-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  oneModeCoffee$: Subject<void> = new Subject();
  coffeeItems: Coffee[] = [];
  coffeeRenderer: Type<ItemRenderer<Coffee>> = CoffeeRendererComponent;
  coffeeItemHeightPx = 420;
  coffeeViewHeightPx = 420;
  coffeeTrackBy: (i: number, item: Coffee) => number | string = (i: number, item: Coffee) => item.id;
  isLoading = false;

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
    const getCoffeeOnInterval$ = interval(5000)
      .pipe(startWith(0), map(() => Date.now()));
    combineLatest([getCoffeeOnClick$, getCoffeeOnInterval$]).pipe(
      filter(([clickTimestamp, intervalTimestamp]) => {
        // it is the click event
        if (clickTimestamp >= intervalTimestamp) return true;
        // it is the interval event (ignore if there was a click recently)
        return intervalTimestamp - clickTimestamp > 5000;
      }),
      // ignore if the click occurred immediately after the interval
      debounceTime(200),
      tap(() => { this.isLoading = true; }),
      // generate fake coffee ID
      map(() => this.coffeeItems.length + 1),
      // ignore if the previous request is not completed
      exhaustMap((id: number) => {
        return this.coffeeService.get(id)
          .pipe(catchError(() => of(null)));
      }),
      takeUntil(this.destroy$)
    ).subscribe((coffee: Coffee | null) => {
      if (coffee) {
        // change the link to detect changes
        this.coffeeItems = [...this.coffeeItems, coffee];
      }
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
