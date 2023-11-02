import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { HeaderDirective } from './header.directive';
import { NavbarDirective } from './navbar.directive';
import { HeaderComponent } from './header/header.component';
import { AnimationDirective } from './animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDirective,
    NavbarDirective,
    HeaderComponent,
    AnimationDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
