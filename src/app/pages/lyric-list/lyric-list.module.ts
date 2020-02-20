import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyricListPage } from './lyric-list';
import { LyricListPageRoutingModule } from './lyric-list-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LyricListPageRoutingModule
  ],
  declarations: [LyricListPage],
})
export class LyricListModule {}
