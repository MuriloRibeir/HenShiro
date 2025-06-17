import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [ DefaultLoginLayoutComponent, InputPrimarioComponent, ReactiveFormsModule, CommonModule, FormsModule],
  providers:  [ LoginService, Cliente ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<cadastroForm>;

  //Objeto do tipo cliente
  cliente = new Cliente();
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

  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente).subscribe(retorno =>{this.clientes.push(retorno);});
   
    //limpa o campo
      this.cliente = new Cliente();

    //mensagem
      alert('Usuario cadastrado');
  }

  //Método de seleçao de um cliente unico 
  selecionarCliente(posicao:number):void{
    //selecionar o cliente no array
    this.cliente = this.clientes[posicao];
  }

  //Método para editar clientes
  editar():void{
    this.servico.editar(this.cliente).subscribe(retorno =>{
      //Obter posição do array do cliente
      let posicao = this.clientes.findIndex(obj =>{
        return obj.id == retorno.id;
      });
      
      //alterar os dados do cliente no array
      this.clientes[posicao] = retorno;

      //limpa o campo
      this.cliente = new Cliente();

      //mensagem
      alert('Usuario editado');
    })
  }
  //Método para DELETAR clientes
  remover():void{
    this.servico.remover(this.cliente.id).subscribe(retorno =>{
      //Obter posição do array do cliente
      let posicao = this.clientes.findIndex(obj =>{
        return obj.id == this.cliente.id;
      });
      
      //remover cliente do cliente no array
      this.clientes.splice(posicao, 1)

      //limpa o campo
      this.cliente = new Cliente();

      //mensagem
      alert('Usuario removido');
    })
  }

  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }

}
