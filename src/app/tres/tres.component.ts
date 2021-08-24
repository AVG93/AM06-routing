import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      correo: new FormControl('', [Validators.required, Validators.email])
    });
  }

  enviar() {
    console.warn(JSON.stringify(this.formGroup.value));
  }

  get form() {
    return this.formGroup.controls;
  }
}
