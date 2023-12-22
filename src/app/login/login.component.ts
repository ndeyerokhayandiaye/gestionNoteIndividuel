// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail!: string;
  password!: string;
  apprenants: any[] = [];
  listeprofesseurs: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.apprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
    this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
  }

  connexion() {
    if (!this.password || !this.mail) {
      Swal.fire({
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs',
        icon: 'error'
      });
    } else if (this.password === 'adminpassword' && this.mail === 'admin@gmail.com') {
      this.router.navigate(['admin']);
    } else {
      const etudiantFound = this.apprenants.find(
        (element: any) => element.prenom.toLowerCase() === this.mail.toLowerCase() && element.matricule === this.password
      );

      const professeurFound = this.listeprofesseurs.find(
        (element: any) => element.mail.toLowerCase() === this.mail.toLowerCase() && element.tel === this.password
      );

      if (etudiantFound) {
        // Passer le matricule lors de la navigation vers la page de l'étudiant
        this.router.navigate(['etudiant', etudiantFound.matricule]);
      } else if (professeurFound) {
        this.router.navigate(['formateur']);
      } else {
        Swal.fire({
          title: 'Erreur',
          text: 'Identifiants incorrects',
          icon: 'error'
        });
      }
    }
  }
}
