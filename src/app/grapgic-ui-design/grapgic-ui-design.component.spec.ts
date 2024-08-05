import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapgicUiDesignComponent } from './grapgic-ui-design.component';

describe('GrapgicUiDesignComponent', () => {
  let component: GrapgicUiDesignComponent;
  let fixture: ComponentFixture<GrapgicUiDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrapgicUiDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapgicUiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
