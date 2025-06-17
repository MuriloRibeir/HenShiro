import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../modelo/Cliente';
import { ClienteService } from '../../servicos/cliente.service';
import { CommonModule } from '@angular/common';

   
interface cadastroForm {
  name: FormControl,
  email: FormControl,
  senha: FormControl,
  confirmSenha: FormControl,
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ DefaultLoginLayoutComponent, InputPrimarioComponent, ReactiveFormsModule, CommonModule],
  providers:  [ LoginService, Cliente ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<cadastroForm>;

   //Json dos clientes 
  clientes:Cliente[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private servico:ClienteService
  ) {
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.cadastroForm.value.email, this.cadastroForm.value.senha).subscribe( {
      next: () => this.toastr.success("Login feito com sucesso!"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate() {
    this.router.navigate(["login"])
  }

    //Método selecionar
  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.clientes= retorno);
  }
  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
