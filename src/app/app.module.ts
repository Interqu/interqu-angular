import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// routing fix for build
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// components
import { NavSideBarComponent } from './components/nav-side-bar/nav-side-bar.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { VerificationSuccessComponent } from './pages/verification-success/verification-success.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ExpiredPageComponent } from './pages/expired-page/expired-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    TestPageComponent,
    SettingsPageComponent,
    VerificationSuccessComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ExpiredPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
