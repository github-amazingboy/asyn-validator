import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvfnComponent } from './avfn.component';

describe('AvfnComponent', () => {
  let component: AvfnComponent;
  let fixture: ComponentFixture<AvfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvfnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
