import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInstitutionsComponent } from './for-institutions.component';

describe('ForInstitutionsComponent', () => {
  let component: ForInstitutionsComponent;
  let fixture: ComponentFixture<ForInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
