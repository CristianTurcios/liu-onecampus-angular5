import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingIntroComponent } from './intro.component';

describe('MarketingIntroComponent', () => {
  let component: MarketingIntroComponent;
  let fixture: ComponentFixture<MarketingIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
