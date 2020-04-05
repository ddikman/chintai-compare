import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddPropertyInputComponent } from './add-property-input.component';
import { By } from '@angular/platform-browser';

describe('AddPropertyInputComponent', () => {
  let component: AddPropertyInputComponent;
  let fixture: ComponentFixture<AddPropertyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyInputComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('triggers a url to be loaded', () => {
    let url;
    component.urlAdded.subscribe((str) => url = str);
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'url';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(url).toBe('url');
  });
});
