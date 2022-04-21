import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';
import { OlympusDetailsPageComponent } from './pages/olympus/olympus-details-page/olympus-details-page.component';
import { OlympusComponent } from './pages/olympus/olympus.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:HomeComponent},
  {path:'olympus',component:OlympusComponent},
  {path:'diosID/:dios.id', component: OlympusDetailsPageComponent},

  {path:'contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
