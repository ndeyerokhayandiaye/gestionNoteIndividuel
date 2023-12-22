export class Professeur {

    constructor(
        public id: number,
        public image: string,
        public prenom: string,
        public nom: string,
        public matiere: string,
        public mail: string,
        public tel: string,
        public classes: string,
        public etat?: boolean
    ) { }
}