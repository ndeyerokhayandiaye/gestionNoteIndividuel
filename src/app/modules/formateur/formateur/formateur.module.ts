import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { FormateurComponent } from './formateur.component';


@NgModule({
  declarations: [
    FormateurComponent
  ],
  imports: [
    CommonModule,
    FormateurRoutingModule
  ]
})
export class FormateurModule { }
