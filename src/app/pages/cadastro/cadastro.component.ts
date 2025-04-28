import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ DefaultLoginLayoutComponent, InputPrimarioComponent, ReactiveFormsModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup;
  
  constructor() {
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])

    })
  }

  submit() {
    console.log(this.cadastroForm.value)
  }
}
