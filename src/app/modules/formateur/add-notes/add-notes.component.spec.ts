import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes.component';
import { Apprenant } from 'src/app/models/apprenant';

describe('AddNotesComponent', () => {
  let component: AddNotesComponent;
  let fixture: ComponentFixture<AddNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNotesComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    expect(component.listeEvaluation).toBeDefined();
    expect(component.listeApprenants).toBeDefined();
    expect(component.selectedEvaluationId).toEqual(-1);
    expect(component.notes).toEqual([]);
    expect(component.listeNotes).toEqual([]);
  });

  it('should handle selection of evaluation', () => {
    // Mock data
    const mockEvaluation = { idEvaluation: 1, anneeAcademic: '2023', classe: 'BDA', matiere: 'Math', type: 'Exam', date: '2023-01-01' };
    const mockApprenant: Apprenant = { id: 1, nom: 'Diop', prenom: 'Mohamed', matricule: '001', classe: 'BDA', email: 'momomo@gmail.com', etat: 'actif', note: 20, numero: '778069847', pass: 'passer', photo: null };

    // Setting up the component
    component.listeEvaluation = [mockEvaluation];
    component.listeApprenants = [mockApprenant];

    // Triggering the method
    component.selectedEvaluationId = mockEvaluation.idEvaluation;
    component.onSelectEvaluation();

    // Assertions
    expect(component.notes.length).toEqual(1);
    expect(component.notes[0].apprenant).toEqual(mockApprenant);
    expect(component.notes[0].evaluationId).toEqual(mockEvaluation.idEvaluation);
  });

  it('should assign notes to apprenants', () => {
    // Mock data
    const mockEvaluation = { idEvaluation: 1, anneeAcademic: '2023', classe: 'BDA', matiere: 'Math', type: 'Exam', date: '2023-01-01' };
    const mockApprenant: Apprenant = { id: 1, nom: 'Diop', prenom: 'Mohamed', matricule: '001', classe: 'BDA', email: 'momomo@gmail.com', etat: 'actif', note: 20, numero: '778069847', pass: 'passer', photo: null };

    // Setting up the component
    component.listeEvaluation = [mockEvaluation];
    component.listeApprenants = [mockApprenant];

    // Triggering the method
    component.selectedEvaluationId = mockEvaluation.idEvaluation;
    component.onSelectEvaluation();
    component.attribuerNotes();

    // Assertions
    expect(mockApprenant.note).toBeDefined();
  });
});
