import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBillComponent } from './current-bill.component';

describe('CurrentBillComponent', () => {
  let component: CurrentBillComponent;
  let fixture: ComponentFixture<CurrentBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
