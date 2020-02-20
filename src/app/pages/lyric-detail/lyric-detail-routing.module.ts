import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LyricDetailPage } from './lyric-detail';

const routes: Routes = [
  {
    path: '',
    component: LyricDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LyricDetailPageRoutingModule { }
