import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from '../../../node_modules/@clr/angular';
import { RequestComponent } from './request/request.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { StaffGuardService } from '../shared/staff-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    StaffRoutingModule
  ],
  declarations: [LayoutComponent, MainComponent, RequestComponent],
  providers: [AuthGuardService, StaffGuardService]
})
export class StaffModule { }
