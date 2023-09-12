import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateThoughtComponent } from './generate-thought.component';

describe('GenerateThoughtComponent', () => {
  let component: GenerateThoughtComponent;
  let fixture: ComponentFixture<GenerateThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateThoughtComponent]
    });
    fixture = TestBed.createComponent(GenerateThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
