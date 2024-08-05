import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoCardComponent } from './seo-card.component';

describe('SeoCardComponent', () => {
  let component: SeoCardComponent;
  let fixture: ComponentFixture<SeoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
