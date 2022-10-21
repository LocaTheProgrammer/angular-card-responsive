import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/models/drug.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardImage: string = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpuyyt-jkqBNz7rRElj_znOVAGQSAgOlja5pRGDKvsJBbc5KnX'

  drugProperties: string[] = ['name', 'expirationDate', 'prescribedBy']

  //DATE FORMAT: MM/DD/YYYY
  drugList: Drug[] = [
    new Drug(0, 'tachipirina', new Date("10/25/2022"), 'Dr. House'),
    new Drug(1, 'oki', new Date('11/25/2022'), 'Thirteen'),
    new Drug(2, 'malox', new Date('12/12/2022'), 'James Wilson'),
    new Drug(3, 'ritalin', new Date('5/01/2023'), 'Rober Chase')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addRecord($event: Drug) {
    $event.id = this.drugList.length
    this.drugList.push($event)
  }

  deleteRecord($event: number) {
    this.drugList = this.drugList.filter(drug => drug.id != $event)
  }
}
