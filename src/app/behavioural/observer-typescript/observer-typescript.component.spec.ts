import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTypescriptComponent } from './observer-typescript.component';

describe('ObserverTypescriptComponent', () => {
  let component: ObserverTypescriptComponent;
  let fixture: ComponentFixture<ObserverTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
