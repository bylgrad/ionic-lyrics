import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyricDetailPage } from './lyric-detail';
import { LyricDetailPageRoutingModule } from './lyric-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LyricDetailPageRoutingModule
  ],
  declarations: [
    LyricDetailPage,
  ]
})
export class LyricDetailModule { }
