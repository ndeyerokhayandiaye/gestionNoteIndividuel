export class Apprenant {
  public id: number = 1;
  public matricule: string = "";
  public nom: string = "";
  public prenom: string = "";
  public email: string = "";
  public numero: string = "";
  public classe: string = "";
  public pass: string = "";
  photo: string | null;
  public etat: string = "";
  public note: number;

  constructor(
    matricule: string,
    nom: string,
    prenom: string,
    email: string,
    numero: string,
    classe: string,
    pass: string,
    id: number,
    photo: string,
    etat: string,
    note?: number
  ) {
    this.id = id;
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.numero = numero;
    this.classe = classe;
    this.pass = pass;
    this.photo = photo;
    this.etat = etat;
    this.note = note || 0;  // Initialisez note à 0 si elle est indéfinie
  }
}
