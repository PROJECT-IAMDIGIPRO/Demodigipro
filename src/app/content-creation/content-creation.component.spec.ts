import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreationComponent } from './content-creation.component';

describe('ContentCreationComponent', () => {
  let component: ContentCreationComponent;
  let fixture: ComponentFixture<ContentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
