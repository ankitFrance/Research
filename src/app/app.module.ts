import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosModule } from './videos/videos.module';
import { ContactModule } from './contact/contact.module';
import { NewsModule } from './news/news.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),        // Required
    AppRoutingModule  ,
        // Required for eager  routing
        
    VideosModule,
    ContactModule,
    NewsModule,
    ProductsModule,
    HomeModule,
    DashboardModule
    
    // Required for eager  routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
