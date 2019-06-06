import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompatibilityRulesComponent } from './app-compatibility-rules.component';

describe('AppCompatibilityRulesComponent', () => {
  let component: AppCompatibilityRulesComponent;
  let fixture: ComponentFixture<AppCompatibilityRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCompatibilityRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCompatibilityRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
