import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lyricv2PageRoutingModule } from './lyricv2-routing.module';

import { Lyricv2Page } from './lyricv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lyricv2PageRoutingModule
  ],
  declarations: [Lyricv2Page]
})
export class Lyricv2PageModule {}
