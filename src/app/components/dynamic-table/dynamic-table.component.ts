import { Component, Input } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {

  @Input() headers: any[] = []
  @Input() dataList: any[] = []

  isValueDate(value: any) {
    return Date.parse(value)
  }
}
