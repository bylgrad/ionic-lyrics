import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-lyric-detail',
  templateUrl: 'lyric-detail.html',
  styleUrls: ['./lyric-detail.scss'],
})
export class LyricDetailPage {
  lyric: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const lyricId = this.route.snapshot.paramMap.get('lyricId');
      if (data && data.lyrics) {
        for (const lyric of data.lyrics) {
          if (lyric && lyric.id === lyricId) {
            this.lyric = lyric;
            break;
          }
        }
      }
    });
  }
}
