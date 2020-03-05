import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lyricv2Page } from './lyricv2.page';

const routes: Routes = [
  {
    path: '',
    component: Lyricv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lyricv2PageRoutingModule {}
