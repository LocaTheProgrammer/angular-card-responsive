import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from '../models/drug.model';
import { Image } from '../models/image.model';
@Injectable({
  providedIn: 'root'
})
export class DrugService {

  mockUrl: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Drug[]> {
    return this.httpClient.get<Drug[]>(`${this.mockUrl}/drugs`)
  }

  getCardImg(): Observable<Image> {
    return this.httpClient.get<Image>(`${this.mockUrl}/images`)
  }

  addDrug(newDrug: Drug) {
    return this.httpClient.post<Drug>(`${this.mockUrl}/drugs`, newDrug)
  }

  deleteDrugById(id: number) {
    return this.httpClient.delete<Drug>(`${this.mockUrl}/drugs/${id}`)
  }
}
