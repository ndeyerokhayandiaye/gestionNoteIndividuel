import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './modules/formateur/add-notes/add-notes.component';
import { DashboardComponent } from './modules/formateur/dashboard/dashboard.component';
import { ProgrammeEvalComponent } from './modules/formateur/programme-eval/programme-eval.component';
import { ListEvalComponent } from './modules/formateur/list-eval/list-eval.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddNotesComponent,
    DashboardComponent,
    ProgrammeEvalComponent,
    ListEvalComponent,
    EtudiantComponent
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
