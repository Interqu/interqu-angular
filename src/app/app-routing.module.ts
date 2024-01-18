import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { InterviewHistoryComponent } from './pages/interview-history/interview-history.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }, // sample format
  { path: 'test', component: TestPageComponent },
  { path: 'history', component: InterviewHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
