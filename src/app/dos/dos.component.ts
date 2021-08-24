import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {
  /*alumno: Alumno = {
    matricula: 1496312,
    nombre: 'Juan Gonzalez',
    correo: 'juan@gmail.com'
  };*/

  alumno: Alumno = {
    matricula: null,
    nombre: '',
    correo: ''
  };

  constructor() {}

  ngOnInit() {}

  enviar() {
    console.warn(this.alumno.nombre);
  }
}
