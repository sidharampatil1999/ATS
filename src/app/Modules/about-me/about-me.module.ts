import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { ContactFormComponent } from '../../about-me/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

const route: Routes = [
  { path: '', component: AboutMeComponent },
]

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ],

})
export class AboutMeModule {
  constructor() {
    console.log('AboutMe Module loaded');
  }
}
