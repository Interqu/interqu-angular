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
import { InterviewResultsComponent } from './pages/interview-results/interview-results.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { InterviewListComponent } from './pages/interview-history/interview-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { InterviewDetailsComponent } from './components/interview-details/interview-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { InterviewPracticeComponent } from './pages/interview-practice/interview-practice.component';

//security
import { AuthService } from './services/authentication/AuthService';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authentication/AuthInterceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterviewSelectComponent } from './pages/interview-select/interview-select.component';
import { SearchBarTopComponent } from './components/search-bar-top/search-bar-top.component';
import { InterviewCardComponent } from './components/interview-card/interview-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AverageScoresBarComponent } from './components/average-scores-bar/average-scores-bar.component';
import { InterviewQuestionPopupComponent } from './components/interview-question-popup/interview-question-popup.component';
import { InterviewCardDetailedComponent } from './components/interview-card-detailed/interview-card-detailed.component';
import { UlListComponent } from './components/ul-list/ul-list.component';
import { BlobTextComponent } from './components/blob-text/blob-text.component';
import { DotTextComponent } from './components/dot-text/dot-text.component';
import { HomeNavBarComponent } from './components/home-nav-bar/home-nav-bar.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { CustomInterviewModalComponent } from './components/custom-interview-modal/custom-interview-modal.component';
import { GenerateCustomInterviewComponent } from './pages/generate-custom-interview/generate-custom-interview.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    TestPageComponent,
    SettingsPageComponent,
    InterviewDetailsComponent,
    InterviewListComponent,
    VerificationSuccessComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ExpiredPageComponent,
    DashboardPageComponent,
    InterviewResultsComponent,
    ErrorPageComponent,
    HomePageComponent,
    InterviewPracticeComponent,
    InterviewSelectComponent,
    SearchBarTopComponent,
    InterviewCardComponent,
    ProgressBarComponent,
    TooltipComponent,
    AverageScoresBarComponent,
    InterviewQuestionPopupComponent,
    InterviewCardDetailedComponent,
    UlListComponent,
    BlobTextComponent,
    DotTextComponent,
    HomeNavBarComponent,
    TeamPageComponent,
    SubscriptionPageComponent,
    CustomInterviewModalComponent,
    GenerateCustomInterviewComponent,
    HistoryListComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
