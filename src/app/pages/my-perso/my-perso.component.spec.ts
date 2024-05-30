import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersoComponent } from './my-perso.component';

describe('MyPersoComponent', () => {
  let component: MyPersoComponent;
  let fixture: ComponentFixture<MyPersoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPersoComponent]
    });
    fixture = TestBed.createComponent(MyPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
