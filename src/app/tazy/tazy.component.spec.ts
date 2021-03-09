import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazyComponent } from './tazy.component';

describe('TazyComponent', () => {
  let component: TazyComponent;
  let fixture: ComponentFixture<TazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
