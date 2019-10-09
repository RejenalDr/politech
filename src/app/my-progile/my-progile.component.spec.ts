import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgileComponent } from './my-progile.component';

describe('MyProgileComponent', () => {
  let component: MyProgileComponent;
  let fixture: ComponentFixture<MyProgileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
