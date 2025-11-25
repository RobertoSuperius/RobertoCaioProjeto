import { Injectable } from '@angular/core';

export interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[] = [];

  adicionar(contato: Contato) {
    this.contatos.push(contato);
  }

  listar() {
    return this.contatos;
  }
}
