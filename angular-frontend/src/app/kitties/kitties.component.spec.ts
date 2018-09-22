import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittiesComponent } from './kitties.component';

describe('KittiesComponent', () => {
  let component: KittiesComponent;
  let fixture: ComponentFixture<KittiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
