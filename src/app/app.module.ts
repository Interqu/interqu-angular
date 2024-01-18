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
import { InterviewHistoryComponent } from './pages/interview-history/interview-history.component';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    TestPageComponent,
    SettingsPageComponent,
    InterviewHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    InterviewListComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
