import { Component, Output } from '@angular/core';
import { Drug } from 'src/app/models/drug.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'add-drug-form',
  templateUrl: './add-drug-form.component.html',
  styleUrls: ['./add-drug-form.component.scss']
})
export class AddDrugFormComponent {

  name: string = ''
  expDate: any
  prescribedBy: string = ''

  @Output() emitter = new EventEmitter<any>();

  add() {
    let newRow: Drug = new Drug(0, this.name, new Date(this.expDate), this.prescribedBy)
    this.emitter.emit(newRow)
  }
}
