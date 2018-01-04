import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTipsComponent } from './success-tips.component';

describe('SuccessTipsComponent', () => {
  let component: SuccessTipsComponent;
  let fixture: ComponentFixture<SuccessTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
