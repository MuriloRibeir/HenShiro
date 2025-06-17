import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

//URl da API springboot

private url:string = 'http://localhost:8080';

//Construtor
  constructor(private http:HttpClient) { }

 //método para selecionar todos os clientes
selecionar():Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.url);
}
  //Método de cadastro do cliente
  cadastrar(obj:Cliente):Observable <Cliente>{
    return this.http.post<Cliente>(this.url, obj)
  }
  //Método de edição de cliente
  editar(obj:Cliente):Observable <Cliente>{
    return this.http.put<Cliente>(this.url, obj)}
  
  
  //Método de remoção de cliente
  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }
}
