import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from 'src/app/models/avaluation.model';
import Swal from 'sweetalert2';
import { Matiere } from 'src/app/modules/admin/components/matiere/add-matiere/matiere.model';

@Component({
  selector: 'app-programme-eval',
  templateUrl: './programme-eval.component.html',
  styleUrls: ['./programme-eval.component.scss']
})
export class ProgrammeEvalComponent implements OnInit {
  matieres: Matiere[] = [];
  anneeAcademic: string = "";
  semestre: string = "";
  classe: string = "";
  date = "";
  matiere: string = "";
  type: string = "";
  etat: number = 1;

  pourEvaluation: Evaluation[] = [];
  tabEvaluation: any;
  idLastEvaluation: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem("Eval")) {
      localStorage.setItem("Eval", JSON.stringify(this.pourEvaluation));
    }
    this.tabEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');

    if (this.tabEvaluation.length !== 0) {
      this.idLastEvaluation = this.tabEvaluation[this.tabEvaluation.length - 1].idEvaluation;
    }

    // Chargez les matières au démarrage du composant
    this.loadMatieres();
  }

  loadMatieres() {
    this.matieres = JSON.parse(localStorage.getItem('matiere') || '[]');
  }

  viderChamps() {
    this.anneeAcademic = "";
    this.semestre = "";
    this.classe = "";
    this.date = "";
    this.matiere = "";
    this.type = "";
  }

  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  champsRemplis(): boolean {
    return (
      this.date !== "" &&
      this.anneeAcademic !== "" &&
      this.semestre !== "" &&
      this.classe !== "" &&
      this.matiere !== "" &&
      this.type !== ""
    );
  }

  annulerProgrammation() {
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez annuler votre Programmation",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, j'annule!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.verifierChamps("programmation annulée!", "", "success");
        this.viderChamps();
      }
    });
  }

  validationChamps() {
    if (!this.champsRemplis()) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Programmation faite avec succès',
      });

      let whoProgramme = {
        idEvaluation: this.tabEvaluation.length + 1,
        anneeAcademic: this.anneeAcademic,
        semestre: this.semestre,
        classe: this.classe,
        date: this.date,
        matiere: this.matiere,
        type: this.type,
      };

      this.tabEvaluation.push(whoProgramme);
      localStorage.setItem("Eval", JSON.stringify(this.tabEvaluation));

      this.viderChamps();
      this.router.navigate(['/liste-Evaluations']);
    }
  }
}
