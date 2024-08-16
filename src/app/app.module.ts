import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FiltersComponent } from './filters/filters.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations:[ 
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    FiltersComponent,
    CategoryBannerComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
