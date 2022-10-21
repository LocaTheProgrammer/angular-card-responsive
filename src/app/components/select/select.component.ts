import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'select-custom',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() dataList: any[] = []
  @Input() fieldName: string = ''
  @Input() idPropertyName: string = ''
  item: any
  constructor() { }

  ngOnInit(): void {
  }
  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any) {
    this.item = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  set itemSelected(value: any) {
    this.item = value;
    this.onChange(value);
    this.onTouch(value);
  }

}
