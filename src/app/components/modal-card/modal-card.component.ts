import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {

  @Input() dataList: any[] = []
  @Input() headerList: any[] = []
  @Input() image: any
  @Input() fieldName: any

  drugSelected: any

  @Output() recordAdder = new EventEmitter<any>();
  @Output() recordDeleter = new EventEmitter<any>();

  addRecord($event: any) {
    this.recordAdder.emit($event)
  }

  delete() {
    this.recordDeleter.emit(this.drugSelected)
  }

}
