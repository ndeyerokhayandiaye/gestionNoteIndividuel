import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-eval',
  templateUrl: './list-eval.component.html',
  styleUrls: ['./list-eval.component.scss'],
})
export class ListEvalComponent implements OnInit {
  // Attributs
  anneeAcademic: string = "";
  semestre: string = "";
  classe: string = "";
  date: string = "";
  matiere: string = "";
  type: string = "";
  etat: number = 1;

  // Pour la modification d'une évaluation
  saveTable!: any[];
  modifierEvaluation: boolean = false;

  // Pour récupérer les évaluations programmées
  listeEvaluation: any[] = [];

  // Pour définir l'évaluation à modifier
  evaluationAModifier: any = null;

  // Méthode pour vider les champs
  viderChamps() {
    this.anneeAcademic = "";
    this.semestre = "";
    this.classe = "";
    this.date = "";
    this.matiere = "";
    this.type = "";
  }

  // Méthode pour afficher une alerte après vérification
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  ngOnInit() {
    // Récupérer notre tableau au niveau du localStorage
    this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
  }

  // Méthode pour définir l'évaluation à modifier et afficher le formulaire
  evaluationModifiee(index: number) {
    this.evaluationAModifier = this.listeEvaluation[index];
    this.saveTable = [Object.assign({}, this.evaluationAModifier)]; // Copie de l'évaluation à modifier
    this.modifierEvaluation = true;
  }

  // Méthode pour annuler la modification
  retour() {
    this.modifierEvaluation = false;
    this.viderChamps();
  }

  enregistrerModification() {
    if (this.evaluationAModifier) {
      this.saveTable.forEach(modifiedItem => {
        this.evaluationAModifier.anneeAcademic = modifiedItem.anneeAcademic;
        this.evaluationAModifier.semestre = modifiedItem.semestre;
        this.evaluationAModifier.classe = modifiedItem.classe;
        this.evaluationAModifier.date = modifiedItem.date;
        this.evaluationAModifier.matiere = modifiedItem.matiere;
        this.evaluationAModifier.type = modifiedItem.type;
        this.evaluationAModifier.etat = modifiedItem.etat;
      });

      localStorage.setItem("Eval", JSON.stringify(this.listeEvaluation));

      this.modifierEvaluation = false;

      this.viderChamps();
    }
  }

  // Méthode pour archiver une évaluation
  archiverEvaluation(index: number) {
    const evaluationAArchiver = this.listeEvaluation[index];

    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous allez archiver cette évaluation",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, archiver!"
    }).then((result) => {
      if (result.isConfirmed) {
        evaluationAArchiver.etat = 0; // Archiver l'évaluation
        // Met à jour le tableau dans le localStorage
        localStorage.setItem("Eval", JSON.stringify(this.listeEvaluation));
        this.verifierChamps("Évaluation archivée!", "", "success");
      }
    });
  }
}
