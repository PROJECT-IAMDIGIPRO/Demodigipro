import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDesigningUpdateComponent } from './package-designing-update.component';

describe('PackageDesigningUpdateComponent', () => {
  let component: PackageDesigningUpdateComponent;
  let fixture: ComponentFixture<PackageDesigningUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageDesigningUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageDesigningUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
