import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ATSInfoComponent } from '../../atsinfo/atsinfo.component';



const route: Routes = [
  { path: '', component: ATSInfoComponent },
]

@NgModule({
  declarations: [
    ATSInfoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],
  exports: [
  ]
})
export class ATSModuleModule {
  constructor() {
    console.log('ATS Module  loaded');

  }
}

