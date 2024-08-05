import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingStrategyComponent } from './camping-strategy.component';

describe('CampingStrategyComponent', () => {
  let component: CampingStrategyComponent;
  let fixture: ComponentFixture<CampingStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampingStrategyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampingStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
