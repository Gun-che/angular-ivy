import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {OnlyDigitPipe} from '../pipes/only-digit.pipe';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormComponent),
      multi: true,
    }
  ]
})
export class CustomFormComponent implements ControlValueAccessor, OnInit {
  // tslint:disable-next-line:variable-name
  private _months = 13;
  public form: FormGroup;

  @Input() set months(months: number) {
    this._months = months;
    this.propagateChange(this.months);
    this.propagateTouch(this.months);
  }

  get months(): number {
    return this._months;
  }

  propagateChange = (_: any) => {};

  propagateTouch = (_: any) => {};

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      years: 1,
      months: 1,
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
      this.form.get('years').setValue(OnlyDigitPipe.prototype.transform(value.years), {emitEvent: false});
      this.form.get('months').setValue(OnlyDigitPipe.prototype.transform(value.months), {emitEvent: false});
      this.months = (value.years * 12) + +value.months;
    });
  }

  writeValue(months: any): void {
    this.months = months;
    this.setInputs(months);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setInputs(months: number): void {
    const m = months % 12;
    const y = Math.floor(months / 12);
    this.form.controls.months.setValue(m);
    this.form.controls.years.setValue(y);
  }
}
