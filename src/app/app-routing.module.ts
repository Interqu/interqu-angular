import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { VerificationSuccessComponent } from './pages/verification-success/verification-success.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ExpiredPageComponent } from './pages/expired-page/expired-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InterviewResultsComponent } from './pages/interview-results/interview-results.component';
import { AuthGuard } from './auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { InterviewListComponent } from './pages/interview-history/interview-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterviewPracticeComponent } from './pages/interview-practice/interview-practice.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { InterviewSelectComponent } from './pages/interview-select/interview-select.component';
import { GenerateCustomInterviewComponent } from './pages/generate-custom-interview/generate-custom-interview.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';

const routes: Routes = [
  // { path: '', component: TestPageComponent }, // sample format

  //HOME ROUTING
  { path: '', component: HomePageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'subscription', component: SubscriptionPageComponent },

  { path: 'test', component: TestPageComponent },
  { path: 'user-verification', component: VerificationSuccessComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'expired', component: ExpiredPageComponent },
  { path: 'error', component: ErrorPageComponent },

  //USER ROUTING
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      {
        path: 'history',
        component: InterviewListComponent,
      },
      {
        path: 'practice',
        component: InterviewPracticeComponent,
      },
      {
        path: 'results',
        component: InterviewResultsComponent,
      },
      {
        path: 'interview-browse',
        component: InterviewSelectComponent,
      },
      {
        path: 'custom-interview',
        component: GenerateCustomInterviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
