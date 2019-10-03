import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'campanhas', loadChildren: './campanhas/campanhas.module#CampanhasPageModule' },
  { path: 'projetos', loadChildren: './projetos/projetos.module#ProjetosPageModule' },
  { path: 'acoes', loadChildren: './acoes/acoes.module#AcoesPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
