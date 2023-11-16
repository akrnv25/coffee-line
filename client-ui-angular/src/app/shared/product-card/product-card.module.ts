import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '@product-card/product-card.component';
import { LazyImageModule } from '@lazy-image/lazy-image.module';

@NgModule({
  imports: [CommonModule, LazyImageModule],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardModule {
}
