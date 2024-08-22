import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FiltersComponent } from './filters/filters.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BannerComponent } from './banner/banner.component';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    FiltersComponent,
    CategoryBannerComponent,
    FooterComponent,
    ProductListComponent,
    BannerComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
