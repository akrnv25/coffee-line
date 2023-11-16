import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ButtonModule } from '@button/button.module';
import { ProductCardModule } from '@product-card/product-card.module';
import { ListModule } from '@list/list.module';
import { CoffeeRendererComponent } from '@app/coffee-renderer/coffee-renderer.component';
import { ProgressBarModule } from '@progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ProductCardModule,
    ListModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
