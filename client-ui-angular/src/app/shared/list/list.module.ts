import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ListComponent } from '@list/list.component';
import { ListItemComponent } from '@list/list-item/list-item.component';
import { ButtonModule } from '@button/button.module';

@NgModule({
  imports: [CommonModule, ScrollingModule, ButtonModule],
  declarations: [ListComponent, ListItemComponent],
  exports: [ListComponent]
})
export class ListModule {
}
