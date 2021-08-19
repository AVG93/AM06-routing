import { Component, OnInit } from '@angular/core';
import { Paises } from '../interfaces/paises';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  paises: Paises[] = [
    { id: 'MX', nombre: 'Mexico', imgUrl: '' },
    { id: 'US', nombre: 'Estasos Unidos', imgUrl: '' },
    { id: 'ES', nombre: 'España', imgUrl: '' }
  ];

  constructor() {}

  ngOnInit() {}
}
