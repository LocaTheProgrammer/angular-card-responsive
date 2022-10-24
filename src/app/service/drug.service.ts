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


  // {
  //   "id": 0,
  //   "link": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpuyyt-jkqBNz7rRElj_znOVAGQSAgOlja5pRGDKvsJBbc5KnX"
  // }
  getCardImage(id: number): Observable<Image> {
    return this.httpClient.get<Image>(`${this.mockUrl}/images/${id}`,)
  }


  getAllImages(): Observable<Image> {
    return this.httpClient.get<Image>(`${this.mockUrl}/images`)
  }
}
