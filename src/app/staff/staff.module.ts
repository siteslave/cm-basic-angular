import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from '../../../node_modules/@clr/angular';
import { RequestComponent } from './request/request.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { StaffGuardService } from '../shared/staff-guard.service';
import { ThaiDatePipe } from '../shared/thai-date.pipe';
import { ShortTimePipe } from '../shared/short-time.pipe';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { StandardService } from '../shared/standard.service';
import { AlertService } from '../shared/alert.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    StaffRoutingModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    MainComponent,
    RequestComponent,
  ],
  providers: [
    AuthGuardService,
    StaffGuardService,
    StandardService,
    AlertService
  ]
})
export class StaffModule { }
