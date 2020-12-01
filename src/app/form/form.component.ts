import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name = 'name';
  public price = 'price';
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      products: this.fb.array([
        this.fb.group({
          name: this.fb.control('', [Validators.required]),
          price: this.fb.control('', [Validators.required])
        })
      ])});
  }

  ngOnInit(): void {

     this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });

  }

  addProduct(): void {
    (this.formGroup.controls.products as FormArray).push(this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control('', [Validators.required])
    }));
  }

  removeProduct(index: number): void {
    (this.formGroup.controls.products as FormArray).removeAt(index);
  }
}
