import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { DashboardComponent } from './dashboard/dashboard.component';
import  { PeopleComponent } from './people/people.component';
import { SingleComponent } from './single/single.component';
const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard',  component: DashboardComponent },
{ path: 'people',  component: PeopleComponent },
{ path: 'single/:id', component: SingleComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
