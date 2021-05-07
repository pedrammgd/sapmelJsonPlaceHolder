import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooommComponent } from './cooomm.component';

describe('CooommComponent', () => {
  let component: CooommComponent;
  let fixture: ComponentFixture<CooommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
