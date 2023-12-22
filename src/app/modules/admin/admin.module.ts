import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestComponent } from './components/test/test.component';
import { AddApprenantComponent } from './components/apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './components/apprenants/list-apprenant/list-apprenant.component';
import { EditApprenantComponent } from './components/apprenants/edit-apprenant/edit-apprenant.component';
import { DetailsApprenantComponent } from './components/apprenants/details-apprenant/details-apprenant.component';
import { StattistiqueComponent } from './components/stattistique/stattistique.component';
import { AddClasseComponent } from './components/classes/add-classe/add-classe.component';
import { EditClasseComponent } from './components/classes/edit-classe/edit-classe.component';
import { ListClasseComponent } from './components/classes/list-classe/list-classe.component';
import { DetailsClasseComponent } from './components/classes/details-classe/details-classe.component';
import { AddProfesseursComponent } from './components/professeurs/add-professeurs/add-professeurs.component';
import { ListProfesseursComponent } from './components/professeurs/list-professeurs/list-professeurs.component';
import { AddMatiereComponent } from './components/matiere/add-matiere/add-matiere.component';
import { Apprenant } from 'src/app/models/apprenant';
import { ApprenantComponent } from './components/apprenant/apprenant.component';


@NgModule({
  declarations: [
    AdministrateurComponent,
    SidebarComponent,
    TestComponent,
    AddApprenantComponent,
    ListApprenantComponent,
    EditApprenantComponent,
    DetailsApprenantComponent,
    StattistiqueComponent,
    AddClasseComponent,
    EditClasseComponent,
    ListClasseComponent,
    DetailsClasseComponent,
    AddProfesseursComponent,
    ListProfesseursComponent,
    AddMatiereComponent,
    ApprenantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
