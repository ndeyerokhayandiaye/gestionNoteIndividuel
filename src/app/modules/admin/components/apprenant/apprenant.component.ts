import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../../../../models/apprenant';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.scss']
})
export class ApprenantComponent  implements OnInit{

  apprenant:Apprenant[]=[

  ]
   //constructeur apprenant
   constructor(){};


  //info apprenant
  matricule = "";
  nom = "";
  prenom = "";
  email = "";
  numero = "";
  classe = "";

  //info matiere
  nomMatiere ="";
  nomProfeseur ="";
  nomClasse="";

  showEvaluation:boolean=false;
  afficherEvaluationMariere(){
    this.showEvaluation=!this.showEvaluation

  }
  items = [
    { id: 1, nom: 'MATHEMATIQUE' , description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.'},
    { id: 2, nom: 'FRANCAIS', description:'Ex, similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    { id: 3, nom: 'ENGLAIS', description:'Adipisicing elit. Ex, lorem ipsum dolor sit amet consectetur,  similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.' },
    { id: 4, nom: 'SVT', description:'Adipisicing elit. Ex, lorem ipsum dolor sit amet consectetur,  similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.' },
    { id: 5, nom: 'HISTOIRE', description:'Adipisicing elit. Ex, lorem ipsum dolor sit amet consectetur,  similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.' },
    { id: 6, nom: 'GEOGRAPHIE', description:'Adipisicing elit. Ex, lorem ipsum dolor sit amet consectetur,  similique sit nostrum, ab magnam inventore esse atque amet consequuntur culpa sed officia? Eaque consequuntur nemo maxime, nostrum quasi non quam.' },

  ];

  termeDeRecherche: string = '';
  itemsFiltres: any[] | undefined; // Tableau pour stocker les éléments filtrés

  filtrerItems() {
    this.itemsFiltres = this.items.filter(item =>
      item.nom.toLowerCase().includes(this.termeDeRecherche.toLowerCase())
    );
  }
  getItems(): any[] {
    return this.items;
  }
  ngOnInit(): void {
    const savedItems = localStorage.getItem('items');
  }
  // Si des données sont présentes dans le localStorage, les utiliser
  if (savedItems: string) {
    this.items = JSON.parse(savedItems);
  }
  sauvegarderItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

}
