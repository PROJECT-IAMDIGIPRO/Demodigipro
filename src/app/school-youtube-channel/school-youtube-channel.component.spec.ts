import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolYoutubeChannelComponent } from './school-youtube-channel.component';

describe('SchoolYoutubeChannelComponent', () => {
  let component: SchoolYoutubeChannelComponent;
  let fixture: ComponentFixture<SchoolYoutubeChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolYoutubeChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolYoutubeChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
