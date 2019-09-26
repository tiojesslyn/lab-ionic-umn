import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UkmPage } from './ukm.page';
import { UkmRoutingModule } from './ukm-routing.module'

import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: UkmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UkmRoutingModule
  ],
  declarations: [UkmPage]
})
export class UkmPageModule {}
