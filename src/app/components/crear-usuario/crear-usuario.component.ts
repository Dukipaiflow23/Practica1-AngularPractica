import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit{
  nombreForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nombreForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      puesto: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarNombre() {
    console.log(this.nombreForm)
  }

}
