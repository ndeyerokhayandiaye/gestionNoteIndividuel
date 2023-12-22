import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-apprenant',
  templateUrl: './edit-apprenant.component.html',
  styleUrls: ['./edit-apprenant.component.scss']
})
export class EditApprenantComponent {
  // Attributs
  photo = "";

  matricule = "";
  nom = "";
  prenom = "";
  email = "";
  numero = "";
  classe = "";
  classes:any;
  idApprenantToModify: any;
  // Methodes
  constructor(private router: Router, private routerActivated: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.idApprenantToModify = this.routerActivated.snapshot.params['id'];
    console.log(this.idApprenantToModify);
    this.brancherChamps();
    this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
  }


  brancherChamps() {
    let listeApprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
    let apprenantToModify = listeApprenants.find((element: any) => element.id == this.idApprenantToModify);
    this.photo = apprenantToModify.photo;

    this.matricule = apprenantToModify.matricule;
    this.nom = apprenantToModify.nom;
    this.prenom = apprenantToModify.prenom;
    this.email = apprenantToModify.email;
    this.numero = apprenantToModify.numero;
    this.classe = apprenantToModify.classe;
  }
  // la fonction qui verifie les veleurs saisies au niveau des champs
  verifierFormModif() {
    if (this.matricule != "" || this.prenom != "" || this.nom != "" || this.email != "" || this.numero != "" || this.classe != "") {
      this.modifierApprenant();

    } else {
      this.sweetMessage("désolé", "veuillez renseigner tous les chmaps", "error");

    }
  }

  // la fonctionn qui fait l'ajout au niveau des champts
  modifierApprenant() {
    let apprenant;
    if (localStorage.getItem('apprenants') == null || localStorage.getItem('apprenants') == undefined) {
      apprenant = new Apprenant(this.matricule, this.nom, this.prenom, this.email, this.numero, this.classe, "passer", 1, this.photo,'actif');
      localStorage.setItem('apprenants', JSON.stringify([apprenant]));
      // this.sweetMessage("merci", "Insertion faite avec succes", "success");
    } else {
      let listeApprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
      // let incrementedId = listeApprenants[listeApprenants.length - 1].id + 1;
      // listeApprenants.push(apprenant);
      listeApprenants.forEach((element: any) => {
        apprenant = new Apprenant(this.matricule, this.nom, this.prenom, this.email, this.numero, this.classe, "passer", element.id, this.photo,'actif');
        if (element.id == this.idApprenantToModify) {
          element.matricule = apprenant.matricule;
          element.nom = apprenant.nom;
          element.prenom = apprenant.prenom;
          element.email = apprenant.email;
          element.numero = apprenant.numero;
          element.photo = apprenant.photo;
          element.classe = apprenant.classe;
          // alert('in')
        }
        // alert('out')

      });
      localStorage.setItem('apprenants', JSON.stringify(listeApprenants));
      // réinitialisation du formulaire
      this.resetForm();
    }
    this.sweetMessage("merci", "Modification faite avec succes", "success");
    this.router.navigate(['admin/listApprenant']);
  }

  resetForm() {
    this.matricule = "";
    this.photo = "";
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.numero = "";
    this.classe = "";
  }

  sweetMessage(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  activeDesactive(faire:any,id:number){
    if (faire=="activer") {
      // alert('activer')
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="actif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
    }else if(faire=="desactiver"){
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="desactif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
      // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
      // alert('desactiver')
    }
  }
}
