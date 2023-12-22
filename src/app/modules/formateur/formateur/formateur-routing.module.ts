import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponent } from './formateur.component';
import { AddNotesComponent } from '../add-notes/add-notes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgrammeEvalComponent } from '../programme-eval/programme-eval.component';
import { ListEvalComponent } from '../list-eval/list-eval.component';

const routes: Routes = [{
  path: '', component: FormateurComponent, children: [
    {
      path: 'addnote', component: AddNotesComponent
    },
    {
      path: 'evaluation', component: ProgrammeEvalComponent
    },
    {
      path: 'listevaluation', component: ListEvalComponent
    },
    {
      path: 'dashboard', component: DashboardComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
