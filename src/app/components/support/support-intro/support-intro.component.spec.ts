import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportIntroComponent } from './support-intro.component';

describe('SupportIntroComponent', () => {
  let component: SupportIntroComponent;
  let fixture: ComponentFixture<SupportIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
