import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponent } from './route/route.component';
const routes: Routes = [
  {path:'',component:RouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

