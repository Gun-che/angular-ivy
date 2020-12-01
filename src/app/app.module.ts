import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatPipe } from './pipes/format.pipe';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { OnlyDigitPipe } from './pipes/only-digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    FormComponent,
    CustomFormComponent,
    OnlyDigitPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
