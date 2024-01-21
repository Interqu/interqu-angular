import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }, // sample format
  { path: 'test', component: TestPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
