export class Classe {
  // Attributs
  id:Number=1;
  nom:String="";
  description:String="";
  etat:String="";
  constructor(id:number,nom:String,description:String,etat:String) {
    this.id=id;
    this.nom=nom;
    this.description=description;
    this.etat=etat;
  }
}
