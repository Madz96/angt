import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngtLibComponent } from './angt-lib.component';

describe('AngtLibComponent', () => {
  let component: AngtLibComponent;
  let fixture: ComponentFixture<AngtLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngtLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngtLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
