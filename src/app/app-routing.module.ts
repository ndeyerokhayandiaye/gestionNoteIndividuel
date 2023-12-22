// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AddNotesComponent } from './modules/formateur/add-notes/add-notes.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bbb', component: AddNotesComponent },
  { path: 'etudiant/:matricule', component: EtudiantComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'formateur', loadChildren: () => import('./modules/formateur/formateur/formateur.module').then(m => m.FormateurModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
