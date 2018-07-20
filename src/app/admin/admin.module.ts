import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '../../../node_modules/@clr/angular';
import { AdminGuardService } from '../shared/admin-guard.service';
import { ThaiDatePipe } from '../shared/thai-date.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [LayoutComponent, HomeComponent],
  providers: [AdminGuardService]
})
export class AdminModule { }
