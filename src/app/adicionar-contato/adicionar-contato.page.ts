import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-adicionar-contato',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './adicionar-contato.page.html',
})
export class AdicionarContatoPage {

  nome = '';
  email = '';
  telefone = '';

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

  salvar() {
    this.contatoService.adicionar({
      nome: this.nome,
      email: this.email,
      telefone: this.telefone
    });

    this.router.navigate(['/menu/listar-contatos']);
  }
}
