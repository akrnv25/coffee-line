import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Type } from '@angular/core';

import { ItemRenderer } from '@list/core/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<I> {
  @Input() items: I[];
  @Input() itemRenderer: Type<ItemRenderer<I>>
  @Input() trackBy: (i: number, item: I) => number | string;
  @Input() emptyMessage: string;
  @Input() itemHeightPx: number;
  @Input() viewHeightPx: number;
  @Output() add: EventEmitter<void> = new EventEmitter();
}
