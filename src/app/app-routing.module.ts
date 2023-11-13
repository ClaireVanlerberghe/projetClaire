import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{ path: '', component: HomePageComponent},
{ path:'client', component: ClientPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }