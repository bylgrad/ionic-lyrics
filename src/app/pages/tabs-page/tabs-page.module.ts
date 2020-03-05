import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { LyricDetailModule } from '../lyric-detail/lyric-detail.module';
import { LyricListModule } from '../lyric-list/lyric-list.module';
import { Lyricv2PageModule } from '../lyricv2/lyricv2.module';
import { Lyricv2DetailPageModule } from '../lyricv2-detail/lyricv2-detail.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    LyricDetailModule,
    LyricListModule,
    // Lyricv2PageModule,
    // Lyricv2DetailPageModule,
    ScheduleModule,
    SessionDetailModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
