import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.scss']
})
export class ListApprenantComponent implements OnInit{
  apprenants:any;
  ngOnInit(): void {
    this.apprenants=JSON.parse(localStorage.getItem('apprenants') || '[]');
  }

  activeDesactive(faire:any,id:number){
    if (faire=="activer") {
      // alert('activer')
      this.apprenants.forEach((element:any) => {
        if (element.id==id) {
          element.etat="actif";
        }
      });
      localStorage.setItem('apprenants',JSON.stringify(this.apprenants));
    }else if(faire=="desactiver"){
      this.apprenants.forEach((element:any) => {
        if (element.id==id) {
          element.etat="desactif";
        }
      });
      localStorage.setItem('apprenants',JSON.stringify(this.apprenants));
      // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
      // alert('desactiver')
    }
  }
}
