import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OnlyDigitPipe} from './pipes/only-digit.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      customControl: 1,
      inputValue: 1,
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      this.form.get('inputValue').setValue(OnlyDigitPipe.prototype.transform(value.inputValue), {emitEvent: false});
      console.log(value);
    });
  }

  setCustomControlsValue(): void {
    this.form.controls.customControl.setValue(this.form.controls.inputValue.value);
  }
}
