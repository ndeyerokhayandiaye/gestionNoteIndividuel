import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';

interface Note {
  nom: string;
  note: number | undefined;
  evaluationId: number; // Modification : evaluationId est un nombre
}

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiant: Apprenant | null = null;
  notes: Note[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const matricule = params.get('matricule');
      console.log('Matricule:', matricule);
      this.etudiant = this.getEtudiantByMatricule(matricule);
      console.log('Etudiant:', this.etudiant);
      this.notes = this.getNotesForEtudiant(matricule);
      console.log('Notes:', this.notes);
    });
  }
  

  private getEtudiantByMatricule(matricule: string | null): Apprenant | null {
    const apprenants: Apprenant[] = JSON.parse(localStorage.getItem('apprenants') || '[]');
    return apprenants.find(apprenant => apprenant.matricule === matricule) || null;
  }

  private getNotesForEtudiant(matricule: string | null): Note[] {
    const notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
    return notes.filter(note => note.evaluationId === Number(matricule)); 
  }
}
