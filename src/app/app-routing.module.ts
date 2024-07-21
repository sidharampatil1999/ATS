import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LeftTextAreaBoxComponent } from './home-page/left-text-area-box/left-text-area-box.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  //{ path: '', component: HomePageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'What is ATS?', loadChildren: () => import('./Modules/atsmodule/atsmodule.module').then((mod) => mod.ATSModuleModule) },
  { path: 'About Me', loadChildren: () => import('./Modules/about-me/about-me.module').then((mod) => mod.AboutMeModule) },

  //{ path: 'What is ATS?', component: ATSInfoComponent },
  //{ path: 'About Me', component: AboutMeComponent }

];

@NgModule({
 //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
