import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ContatoService, Contato } from '../services/contato.service';

@Component({
  selector: 'app-listar-contatos',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './listar-contatos.page.html',
})
export class ListarContatosPage implements OnInit {

  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.listar();
  }
}
