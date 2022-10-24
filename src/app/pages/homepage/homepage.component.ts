import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from 'src/app/models/drug.model';
import { Image } from 'src/app/models/image.model';
import { DrugService } from 'src/app/service/drug.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardImage: Observable<Image> = this.drugService.getAllImages()
  drugProperties: string[] = ['name', 'expirationDate', 'prescribedBy']

  //DATE FORMAT: MM/DD/YYYY
  drugList: Drug[] = []

  constructor(private drugService: DrugService) { }

  ngOnInit(): void {
    this.getDrugs()
  }

  getDrugs() {
    this.drugService.getAll().subscribe(drugs => {
      this.drugList = drugs
    })
  }

  addRecord($event: Drug) {
    $event.id = this.drugList.length
    this.drugList.push($event)
  }

  deleteRecord($event: number) {
    this.drugList = this.drugList.filter(drug => drug.id != $event)
  }
}
