import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lyricv2DetailPage } from './lyricv2-detail.page';

describe('Lyricv2DetailPage', () => {
  let component: Lyricv2DetailPage;
  let fixture: ComponentFixture<Lyricv2DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lyricv2DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lyricv2DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
