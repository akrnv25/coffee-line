import { ChangeDetectionStrategy, Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { ItemRenderer } from '@list/core/interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent<I> implements OnInit {
  @Input() item: I;
  @Input() itemHeightPx: number;
  @Input() itemRenderer: Type<ItemRenderer<I>>;

  @ViewChild('viewContainer', { static: true, read: ViewContainerRef })
  private viewContainerRef: ViewContainerRef;

  constructor() {
  }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(this.itemRenderer);
    componentRef.instance.item = this.item;
    componentRef.instance.itemHeightPx = this.itemHeightPx;
  }
}
