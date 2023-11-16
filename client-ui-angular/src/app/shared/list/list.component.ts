import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Type, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { ListItemRenderer } from '@list/core/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<I> {
  @Input() items: I[];
  @Input() itemRenderer: Type<ListItemRenderer<I>>
  @Input() trackBy: (i: number, item: I) => number | string;
  @Input() emptyMessage: string;
  @Input() itemHeightPx: number;
  @Input() viewHeightPx: number;
  @Output() add: EventEmitter<void> = new EventEmitter();

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  scrollToIndex(i: number): void {
    if (this.items?.length && this.items[i]) {
      this.viewPort.scrollToIndex(i, 'smooth');
    }
  }
}
