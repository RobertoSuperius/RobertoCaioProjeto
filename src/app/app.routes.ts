import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menu/menu.page').then(m => m.MenuPage),
    children: [
      {
        path: 'listar-contatos',
        loadComponent: () =>
          import('./listar-contatos/listar-contatos.page').then(m => m.ListarContatosPage)
      },
      {
        path: 'adicionar-contato',
        loadComponent: () =>
          import('./adicionar-contato/adicionar-contato.page').then(m => m.AdicionarContatoPage)
      }
    ]
  }
];
