import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { PersonalComponent } from './details/personal/personal.component';
import { ProfessionalComponent } from './details/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    PersonalComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
