import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lyricv2Page } from './lyricv2.page';

describe('Lyricv2Page', () => {
  let component: Lyricv2Page;
  let fixture: ComponentFixture<Lyricv2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lyricv2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lyricv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
