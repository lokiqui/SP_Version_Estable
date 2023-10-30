import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionPage } from './avion.page';

const routes: Routes = [
  {
    path: '',
    component: AvionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvionPageRoutingModule {}
