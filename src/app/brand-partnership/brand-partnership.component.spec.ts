import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPartnershipComponent } from './brand-partnership.component';

describe('BrandPartnershipComponent', () => {
  let component: BrandPartnershipComponent;
  let fixture: ComponentFixture<BrandPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandPartnershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
