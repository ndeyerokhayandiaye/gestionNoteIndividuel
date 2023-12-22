import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/models/matiere';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.scss']
})
export class AddMatiereComponent implements OnInit {
  id: number = 0;
  libelle!: string;
  matieres!: Matiere[]; // Assurez-vous de spécifier le type Matiere
  etat: boolean = true;
  cleId = false;
  editMatiere: boolean = false;
  matiereEdit!: Matiere[]; // Assurez-vous de spécifier le type Matiere

  ngOnInit(): void {
    this.matieres = JSON.parse(localStorage.getItem('matiere') || '[]');
  }

  viderChamps() {
    this.libelle = '';
  }

  changeState(param: number) {
    this.matieres.forEach(element => {
      if (element.id == param) {
        element.etat = !element.etat;
        this.editMatiere = false;
        localStorage.setItem('matiere', JSON.stringify(this.matieres));
      }
    });
  }

  editeurMatiere(param: number) {
    this.matieres.forEach(element => {
      if (element.id == param) {
        this.matiereEdit = this.matieres.filter((ele) => ele.id == param);
        this.editMatiere = true;
        // this.cleId = element.id;
      }
    });
  }

  resetForm() {
    this.editMatiere = false;
  }

  addMatiere() {
    let matiere: Matiere; // Assurez-vous de spécifier le type Matiere
    if (this.libelle[0] == ' ' || this.libelle.length < 2) {
      Swal.fire({
        title: 'Erreur !!',
        text: 'Veillez respecter le format',
        icon: 'error'
      });
    } else if (this.matieres.find((ele) => ele.libelle == this.libelle)) {
      Swal.fire({
        title: 'Erreur !!',
        text: `${this.libelle} existe déjà`,
        icon: 'error'
      });
      this.viderChamps();
    } else {
      if (localStorage.getItem('matiere') == null || localStorage.getItem('matiere') == undefined) {
        matiere = new Matiere(this.id, this.libelle, this.etat);
        localStorage.setItem('matiere', JSON.stringify([matiere]));
      } else {
        this.matieres = JSON.parse(localStorage.getItem('matiere') || '[]');
        let incrementedId = this.matieres[this.matieres.length - 1].id + 1;
        matiere = new Matiere(incrementedId, this.libelle, this.etat);
        this.matieres.push(matiere);
        localStorage.setItem('matiere', JSON.stringify(this.matieres));
      }

      Swal.fire({
        title: 'Succès !!',
        text: 'Matière ajoutée avec succès',
        icon: 'success'
      });
      this.matieres = JSON.parse(localStorage.getItem('matiere') || '[]');
      this.viderChamps();
    }
  }
}
