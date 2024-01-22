import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

// routing fix for build
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    TestPageComponent,
    SettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
