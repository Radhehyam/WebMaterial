import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule if you're using ngModel
import { HeaderModule } from './header/header.module';
import { WebmainModule } from "./webmain/webmain.module";
//import { LatestcarouselComponent } from './WenMainContaint/latestcarousel/latestcarousel.component';
//import { LatestCarouselComponent } from './WebMain/latest-carousel/latest-carousel.component';
//import { LatestCorusolComponent } from './latest-corusol/latest-corusol.component';
//import { TopheaderComponent } from './header/topheader/topheader.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
   // TopheaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    WebmainModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
