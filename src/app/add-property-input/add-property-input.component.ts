import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-property-input',
  templateUrl: './add-property-input.component.html',
  styleUrls: ['./add-property-input.component.scss']
})
export class AddPropertyInputComponent {

  url: string;

  @Output()
  urlAdded: EventEmitter<string>;

  constructor() {
    this.urlAdded = new EventEmitter();
  }

  raiseEvent() {
    this.urlAdded.emit(this.url);
  }
}
