import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { PersonalComponent } from './details/personal/personal.component';
import { ProfessionalComponent } from './details/professional/professional.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"details",component:DetailsComponent,children:[
    {path:"personal",component:PersonalComponent},
    {path:"professional",component:ProfessionalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
