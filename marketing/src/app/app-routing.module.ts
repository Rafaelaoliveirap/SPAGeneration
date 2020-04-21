import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { AboutComponent } from './about/about.component';
import { PlansComponent } from './plans/plans.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path:"contato", component: ContatoComponent},
  {path: "about", component: AboutComponent},
  {path: "plans", component: PlansComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
