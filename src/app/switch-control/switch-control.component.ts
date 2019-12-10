import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch-control',
  templateUrl: './switch-control.component.html',
  styleUrls: ['./switch-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SwitchControlComponent
    }
  ]
})
export class SwitchControlComponent implements ControlValueAccessor {

  @Input() checked = false;
  isOn: boolean;
  // tslint:disable-next-line: variable-name
  _onChange: (value: any) => void;

  writeValue(value: any) {
    this.isOn = !!value;
  }
  registerOnChange(fn: (value: any) => void) {
    this.writeValue(this.checked);
    // this.toggle(this.checked);
    this._onChange = fn;
  }
  registerOnTouched(fn: (value: any) => void) {

  }

  toggle(isOn: boolean) {
    this.isOn = isOn;
    this._onChange(isOn);
  }

}
