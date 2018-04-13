import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnotificComponent } from './topnotific.component';

describe('TopnotificComponent', () => {
  let component: TopnotificComponent;
  let fixture: ComponentFixture<TopnotificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnotificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnotificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
