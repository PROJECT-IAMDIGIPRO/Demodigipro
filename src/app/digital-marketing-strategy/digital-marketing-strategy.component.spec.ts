import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingStrategyComponent } from './digital-marketing-strategy.component';

describe('DigitalMarketingStrategyComponent', () => {
  let component: DigitalMarketingStrategyComponent;
  let fixture: ComponentFixture<DigitalMarketingStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalMarketingStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketingStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
