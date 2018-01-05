import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUniversitiesComponent } from './support-universities.component';

describe('SupportUniversitiesComponent', () => {
  let component: SupportUniversitiesComponent;
  let fixture: ComponentFixture<SupportUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
