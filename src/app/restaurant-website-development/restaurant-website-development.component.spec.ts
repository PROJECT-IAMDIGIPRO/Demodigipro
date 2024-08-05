import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWebsiteDevelopmentComponent } from './restaurant-website-development.component';

describe('RestaurantWebsiteDevelopmentComponent', () => {
  let component: RestaurantWebsiteDevelopmentComponent;
  let fixture: ComponentFixture<RestaurantWebsiteDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantWebsiteDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantWebsiteDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
