import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lyricv2DetailPage } from './lyricv2-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Lyricv2DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lyricv2DetailPageRoutingModule {}
