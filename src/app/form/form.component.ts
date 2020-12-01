import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../types';
import {FormatPipe} from '../pipes/format.pipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name = 'name';
  public price = 'price';
  public products: IProduct[] = [{name: 'Item1', price: '10 000'}];
  public productControl: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.productControl = new FormGroup({
      name:  new FormControl('', [Validators.required]),
      price:  new FormControl('', [Validators.required]),
    });

    this.productControl.valueChanges.subscribe((value) => {
      console.log(value);
      this.productControl.controls.price.setValue(FormatPipe.prototype.transform(value.price), {emitEvent: false});
    });

  }

  onSubmit(name: string, price: string): void {
    if (name  && price) {
      this.products.push({name, price});
      this.productControl.get('price').setValue('');
      this.productControl.get('name').setValue('');
      console.log('submit');
    } else {
      console.log('invalid request');
    }
  }
}
