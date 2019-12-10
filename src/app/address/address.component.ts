import { Component, OnInit, Input, forwardRef, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

export const validateInput = (c: FormControl) => {
  return (c.value == null || c.value === undefined) ? { required: true } : null;
};

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressComponent,
      multi: true
    },
  ]
})
export class AddressComponent implements ControlValueAccessor {
  @Input() theValue: string;
  // @Input() value: string;
  // tslint:disable-next-line: variable-name
  _onChange: (value: any) => void;
  // tslint:disable-next-line: variable-name
  _onTouched: (value: any) => void;


  onValueChanged(value: any) {
    this.theValue = value;
    this._onChange(value);
    this._onTouched(value);
  }
  writeValue(value: any) {
    if (value !== undefined) {
      this.theValue = value;
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.writeValue(this.theValue);
    this._onChange = fn;
  }

  registerOnTouched(fn: (vaue: any) => void) {
    this.writeValue(this.theValue);
    this._onTouched = fn;
  }

}
