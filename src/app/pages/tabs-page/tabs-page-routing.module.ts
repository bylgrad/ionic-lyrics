import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lyrics',
        children: [
          {
            path: '',
            loadChildren: () => import('../lyric-list/lyric-list.module').then(m => m.LyricListModule)
          },
          {
            path: 'lyric-details/:lyricId',
            loadChildren: () => import('../lyric-detail/lyric-detail.module').then(m => m.LyricDetailModule)
          }
        ]
      },

      {
        path: 'lyricv2',
        children: [
          {
            path: '',
            loadChildren: () => import('../lyricv2/lyricv2.module').then( m => m.Lyricv2PageModule)
          },        
          {
            path: 'lyricv2-detail/:id',
            loadChildren: () => import('../lyricv2-detail/lyricv2-detail.module').then( m => m.Lyricv2DetailPageModule)
          }
        ]
      },

      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/lyrics',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

