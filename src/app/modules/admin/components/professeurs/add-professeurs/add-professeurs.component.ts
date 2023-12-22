import { Component } from '@angular/core';
import { Professeur } from 'src/app/models/professeurs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-professeurs',
  templateUrl: './add-professeurs.component.html',
  styleUrls: ['./add-professeurs.component.scss']
})
export class AddProfesseursComponent {
  // Liste des attributs
  switch !: number;
  prof!: boolean;
  stateProf = "actif";
  valseAdminProf = 2;
  listeprofesseurs!: any[];
  listMatieres!: any[];
  id: number = 0;
  image !: string;
  prenom !: string;
  nom !: string;
  mail !: string;
  tel !: string;
  classes : any;
  matiere : string = '';
  classesActives: any[]=[];

  ngOnInit(): void {
    this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
    this.listMatieres = JSON.parse(localStorage.getItem('matiere') || '[]');
    this.listMatieres = this.listMatieres.filter((ele) => ele.etat == true);

    this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
    this.classes.forEach((element:any) => {
      if (element.etat=='actif') {
        this.classesActives.push(element);
      }
    });
  }

  viderChamps() {
    this.image = '';
    this.prenom = '';
    this.nom = '';
    this.mail = '';
    this.tel = '';
    this.classes = '';
    this.matiere = '';
  }

  ajouterProfesseur() {
    let professeur;
    if (this.image == "") {
      this.image = 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'
    }
    if (this.image == "" || this.prenom == "" || this.nom == "" || this.mail == "" || this.tel == "" || this.classes == "" || this.matiere == "") {
      Swal.fire({
        title: "Erreur !!",
        text: "Veillez remplir toutes les champs",
        icon: "error"
      });
    } else {
      if (this.prenom[0] === ' ' || this.prenom.length < 2) {
        Swal.fire({
          title: "Erreur !!",
          text: "Veillez respecter le format de prenom",
          icon: "error"
        });
      }
      else if (this.nom === ' ' || this.nom.length < 2) {
        Swal.fire({
          title: "Erreur !!",
          text: "Veillez respecter le format de nom",
          icon: "error"
        });
      }
      else if (!this.mail.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/)) {
        Swal.fire({
          title: "Erreur !!",
          text: "Veillez remplir un mail valide",
          icon: "error"
        });
      } else if (!this.tel.match(/(77|78|70|76|75)[0-9]{7}/)) {
        Swal.fire({
          title: "Erreur !!",
          text: "Veillez remplir un telephone valide",
          icon: "error"
        });
      } else {
        if (localStorage.getItem('professeurs') == null || localStorage.getItem('professeurs') == undefined) {
          professeur = new Professeur(this.id, this.image, this.prenom, this.nom, this.matiere, this.mail, this.tel, this.classes);
          localStorage.setItem('professeurs', JSON.stringify([professeur]));
          // this.sweetMessage("merci", "Insertion faite avec succes", "success");
        } else {
          this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
          let incrementedId = this.listeprofesseurs[this.listeprofesseurs.length - 1].id + 1;
          professeur = new Professeur(incrementedId, this.image, this.prenom, this.nom, this.matiere, this.mail, this.tel, this.classes);
          this.listeprofesseurs.push(professeur);
          localStorage.setItem('professeurs', JSON.stringify(this.listeprofesseurs));
          // réinitialisation du formulaire
        }
        Swal.fire({
          title: "Succes !!",
          text: "Professeur ajouter avec succes",
          icon: "success"
        });
        this.viderChamps();
      }
    }
  }

  valserAdminProfAdd() {
    this.valseAdminProf = 1;
  }
  valserAdminProfList() {
    this.valseAdminProf = 2;
  }
  valserAdminProfDetail() {
    this.valseAdminProf = 3;
  }
  showNote() {
    this.switch = 1;
  }

  showEvaluation() {
    this.switch = 2;
  }
  removeProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = true;
        this.stateProf = "inactif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  restartProf() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prof = false;
        this.stateProf = "actif";
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
