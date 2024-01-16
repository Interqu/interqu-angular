import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { InterviewResultsComponent } from './pages/interview-results/interview-results.component';
import { InterviewListComponent } from './components/interview-list/interview-list.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }, // sample format
  { path: 'test', component: TestPageComponent },
  { path: 'interview-results', component: InterviewResultsComponent },
  { path: 'interview-list', component: InterviewListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
