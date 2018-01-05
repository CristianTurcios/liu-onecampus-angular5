import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSuccessTipsComponent } from './support-success-tips.component';

describe('SupportSuccessTipsComponent', () => {
  let component: SupportSuccessTipsComponent;
  let fixture: ComponentFixture<SupportSuccessTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportSuccessTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSuccessTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
