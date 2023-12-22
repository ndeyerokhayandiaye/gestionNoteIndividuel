import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';

interface Note {
  nom: string;
  note: number | undefined;
  evaluationId: number;
}

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  listeEvaluation: any[] = [];
  listeApprenants: Apprenant[] = [];
  selectedEvaluationId: number = -1;
  notes: { apprenant: Apprenant, note: number | undefined, evaluationId: number }[] = [];
  listeNotes: Note[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.listeEvaluation = JSON.parse(localStorage.getItem("Eval") || '[]');
    this.listeApprenants = JSON.parse(localStorage.getItem('apprenants') || '[]');
  }

  onSelectEvaluation() {
    if (this.selectedEvaluationId !== -1) {
      // Initialisation des notes avec les valeurs actuelles des apprenants
      this.notes = this.listeApprenants.map(apprenant => ({ apprenant, note: apprenant.note, evaluationId: this.selectedEvaluationId }));
    } else {
      console.error('selectedEvaluationId est -1. Impossible de filtrer les apprenants.');
    }

    // Ajoutez le code suivant pour réinitialiser la liste des notes
    this.listeNotes = [];
  }

  attribuerNotes() {
    if (this.selectedEvaluationId !== -1) {
      this.listeApprenants.forEach(apprenant => {
        const note = this.notes.find(n => n.apprenant.id === apprenant.id && n.evaluationId === this.selectedEvaluationId);
        if (note) {
          apprenant.note = note.note || 0; // Utilisation de 0 si la note est undefined
        }
      });

      localStorage.setItem('apprenants', JSON.stringify(this.listeApprenants));

      this.notes = [];
      this.listerNotes();
    } else {
      console.error('selectedEvaluationId est -1. Impossible d\'attribuer les notes.');
    }
  }

  listerNotes() {
    this.listeNotes = this.listeApprenants
      .filter(apprenant => apprenant.note !== undefined)
      .map(apprenant => ({ nom: `${apprenant.prenom} ${apprenant.nom}`, note: apprenant.note, evaluationId: this.selectedEvaluationId }));
  }
}
