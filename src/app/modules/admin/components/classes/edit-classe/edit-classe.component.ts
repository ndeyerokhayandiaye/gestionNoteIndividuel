import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/models/classe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.scss']
})
export class EditClasseComponent {
  // Attributs

  nom = "";
  description = "";
  idClasseToModify: any;


  // Methodes
  constructor(private router: Router, private routerActivated:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.idClasseToModify = this.routerActivated.snapshot.params['id'];
    console.log(this.idClasseToModify);
    this.brancherChamps();
    // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
  }
  brancherChamps() {
    let listeClasses = JSON.parse(localStorage.getItem('classes') || '[]');
    let classeToModify = listeClasses.find((element: any) => element.id == this.idClasseToModify);

    this.nom = classeToModify.nom;
    this.description = classeToModify.description;
  }

  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormAjout() {
    if (this.nom != "" || this.description != "") {
      this.modifierClasse();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  modifierClasse() {
    let classe;
    if (localStorage.getItem('classes') == null || localStorage.getItem('classes') == undefined) {
      classe = new Classe(1, this.nom, this.description,"actif");
      localStorage.setItem('classes', JSON.stringify([classe]));
      // this.sweetMessage("merci", "Insertion faite avec succes", "success");
    } else {
      let listeClasses = JSON.parse(localStorage.getItem('classes') || '[]');
      // let incrementedId = listeClasses[listeClasses.length - 1].id + 1;
      // listeClasses.push(classe);
      listeClasses.forEach((element:any) => {
        classe = new Classe(element.id, this.nom, this.description,"actif");
        if (element.id==this.idClasseToModify) {
          element.nom=classe.nom;
          element.description=classe.description;
        }

      });
      localStorage.setItem('classes', JSON.stringify(listeClasses));
      // réinitialisation du formulaire
      this.resetForm();
    }
    this.sweetMessage("merci", "Modification faite avec succes", "success");
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
