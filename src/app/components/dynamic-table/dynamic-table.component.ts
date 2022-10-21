import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() headers: any[] = []
  @Input() dataList: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  isValueDate(value: any) {
    return value instanceof Date
  }
}
