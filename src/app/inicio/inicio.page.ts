import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './inicio.page.html',
})
export class InicioPage {}
