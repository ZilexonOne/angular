import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { SettingComponent } from './components/setting/setting.component';
import { Setting1Component } from './components/setting1/setting1.component';
import { Setting2Component } from './components/setting2/setting2.component';

const settingChildrenRoutes: Routes = [
  { path: 'setting1', component: Setting1Component },
  { path: 'setting2', component: Setting2Component },
  { path: 'setting3', component: LoginComponent },
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'setting', component:  SettingComponent, children: settingChildrenRoutes},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
