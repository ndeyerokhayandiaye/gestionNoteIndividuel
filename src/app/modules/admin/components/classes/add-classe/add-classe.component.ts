import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.scss']
})
export class AddClasseComponent {
  // Attributs

  nom = "";
  description = "";


  // Methodes
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.nom != "" || this.description != "" ) {
      this.ajouterClasse();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  ajouterClasse() {
    let classe;
    if (localStorage.getItem('classes') == null || localStorage.getItem('classes') == undefined) {
      classe = new Classe(1,this.nom, this.description,"actif");
      localStorage.setItem('classes', JSON.stringify([classe]));
      // this.sweetMessage("merci", "Insertion faite avec succes", "success");
    } else {
      let listeClasses = JSON.parse(localStorage.getItem('classes') || '[]');
      let incrementedId = listeClasses[listeClasses.length - 1].id + 1;
      classe = new Classe(incrementedId,this.nom, this.description,"actif");
      listeClasses.push(classe);
      localStorage.setItem('classes', JSON.stringify(listeClasses));
      // réinitialisation du formulaire
      this.resetForm();
    }
    this.sweetMessage("merci", "Insertion faite avec succes", "success");
    this.router.navigate(['admin/listClasse']);
  }

  resetForm() {

    this.nom = "";
    this.description = "";

  }
  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
