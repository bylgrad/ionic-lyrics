import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lyricv2DetailPageRoutingModule } from './lyricv2-detail-routing.module';

import { Lyricv2DetailPage } from './lyricv2-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lyricv2DetailPageRoutingModule
  ],
  declarations: [Lyricv2DetailPage]
})
export class Lyricv2DetailPageModule {}
