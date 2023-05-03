import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaySvgComponent } from './display-svg/display-svg.component';
import { HttpClientModule } from '@angular/common/http';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySvgComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
