import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Page404Component } from './layouts/page404/page404.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DangnhapdangkyComponent } from './dangnhapdangky/dangnhapdangky.component';
import { ComingsoonComponent } from './layouts/comingsoon/comingsoon.component';
import { EmbedJsService } from './services/embed-js.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    SanphamComponent,
    DangnhapdangkyComponent,
    ComingsoonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmbedJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
