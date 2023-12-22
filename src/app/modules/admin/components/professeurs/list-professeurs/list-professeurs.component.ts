import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/professeurs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-professeurs',
  templateUrl: './list-professeurs.component.html',
  styleUrls: ['./list-professeurs.component.scss']
})
export class ListProfesseursComponent implements OnInit {
  // Liste des attributs
  switch !: number;
  prof!: boolean;
  stateProf = "actif";
  valseAdminProf = 2;
  listeprofesseurs!: any[];
  editprofesseurs!: any[];
  showState!: boolean;
  editProf: boolean = false;
  showDetails: boolean = false;
  
  // 
  cleId!: number;
  id: number = 0;
  image !: string;
  prenom !: string;
  nom !: string;
  mail !: string;
  tel !: string;
  classes: string = '';
  matiere: string = '';

  // flitre

  filreClass = '';

  ngOnInit(): void {
    this.listeprofesseurs = JSON.parse(localStorage.getItem('professeurs') || '[]');
  }

  changeState(param: number) {   
    this.listeprofesseurs.forEach(element => {
      if (element.id == param) {
        if (element.etat != true) {
          Swal.fire({
            title: "Etes-vous sure",
            text: "Voulez-vous activé ce professeur!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, j'active!"
          }).then((result) => {
            if (result.isConfirmed) {
              element.etat = !element.etat;
              Swal.fire({
                title: "Activé!",
                text: "Professeur activé.",
                icon: "success"
              });
            }
          });
        } else {
          Swal.fire({
            title: "Etes-vous sure",
            text: "Voulez-vous desactiver ce professeur!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, je desactive!"
          }).then((result) => {
            if (result.isConfirmed) {
              element.etat = !element.etat;
              Swal.fire({
                title: "Desactivé!",
                text: "Professeur desactivé.",
                icon: "success"
              });
            }
          });
        }
        localStorage.setItem('professeurs', JSON.stringify(this.listeprofesseurs));
      }
    });
  }

  editeurProf(param: number) {
    this.listeprofesseurs.forEach(element => {
      if (element.id == param) {
        this.editprofesseurs = this.listeprofesseurs.filter((ele) => ele.id == param);
        this.editProf = true;
        this.cleId = element.id;
        this.image = element.image;
        this.prenom = element.prenom;
        this.nom = element.nom;
        this.mail = element.mail;
        this.tel = element.tel;
        this.classes = element.class;
        this.matiere = element.matiere;
      }
    });
  }
 
  resetForm() {
    this.editProf = false;
  }
  manipEdit() {
    // let found = this.listeprofesseurs.find((ele) => ele.id == this.cleId)
    this.listeprofesseurs.forEach(element => {
      if (this.cleId == element.id) {
        element.prenom = this.prenom;
        element.nom = this.nom;
        element.mail = this.mail;
        element.classes = this.classes;
        element.matiere = this.matiere;
        element.tel = this.tel;
        Swal.fire({
          title: "Modification faite!",
          text: "Les modifications ont été faites avec succes?",
          icon: "success"
        });
        localStorage.setItem('professeurs', JSON.stringify(this.listeprofesseurs));
        this.editProf = false;
      }
    });
  }

  goDetails(param: number) {
    // this.showDetails = true;
    this.listeprofesseurs.forEach(element => {
      if (element.id == param) {
        this.editprofesseurs = this.listeprofesseurs.filter((ele) => ele.id == param);
        this.showDetails = true;

      }
    });
  }

  // Filtre

  filtreAz() {
    this.listeprofesseurs = this.listeprofesseurs.sort();
  }
  filtreParClasse() {

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
}
