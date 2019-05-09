import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirbusComponent } from './components/airbus/airbus.component';
import { BoeingComponent } from './components/boeing/boeing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"airbus",component:AirbusComponent},
  {path:"boeing",component:BoeingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
