import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
  classes:any;
  ngOnInit(): void {
    this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
  }
  activeDesactive(faire:any,id:number){
    if (faire=="activer") {
      // alert('activer')
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="actif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
    }else if(faire=="desactiver"){
      this.classes.forEach((element:any) => {
        if (element.id==id) {
          element.etat="desactif";
        }
      });
      localStorage.setItem('classes',JSON.stringify(this.classes));
      // this.classes=JSON.parse(localStorage.getItem('classes') || '[]');
      // alert('desactiver')
    }
  }
}
