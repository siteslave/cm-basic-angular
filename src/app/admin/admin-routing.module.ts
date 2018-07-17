import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { AdminGuardService } from '../shared/admin-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuardService, AdminGuardService],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
