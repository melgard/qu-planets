import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterComponent } from './first-letter.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('FirstLetterComponent', () => {
  let component: FirstLetterComponent;
  let fixture: ComponentFixture<FirstLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLetterComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
