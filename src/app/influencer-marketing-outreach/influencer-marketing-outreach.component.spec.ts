import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerMarketingOutreachComponent } from './influencer-marketing-outreach.component';

describe('InfluencerMarketingOutreachComponent', () => {
  let component: InfluencerMarketingOutreachComponent;
  let fixture: ComponentFixture<InfluencerMarketingOutreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluencerMarketingOutreachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerMarketingOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
