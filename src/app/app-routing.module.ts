import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  // { path: '', component: TestPageComponent }, // sample format
  { path: 'test', component: TestPageComponent },
  {
    path: 'user',
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
