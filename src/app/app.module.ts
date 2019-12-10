import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { SwitchControlComponent } from './switch-control/switch-control.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SwitchControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
