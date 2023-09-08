import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './shell/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'currency',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'currencyMfe',
        exposedModule: './Module',
      }).then((m) => m.CurrencyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
