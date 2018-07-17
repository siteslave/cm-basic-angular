import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { RequestComponent } from './request/request.component';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
  {
    path: 'staff',
    canActivate: [AuthGuardService],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'request', component: RequestComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
