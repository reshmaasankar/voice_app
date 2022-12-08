import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechConvertComponent } from './speech-convert.component';

describe('SpeechConvertComponent', () => {
  let component: SpeechConvertComponent;
  let fixture: ComponentFixture<SpeechConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
