import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Colchon } from '../models/colchon.model';

@Injectable({
  providedIn: 'root'
})
export class ColchonService {

  selectedColchon: Colchon;
  colchones: Colchon[];
  
  readonly URL_API = 'http://localhost:3000/api/colchones';

  constructor(private http: HttpClient) {
    this.selectedColchon = new Colchon();
  }

  postColchon(colchon: Colchon) {
    return this.http.post(this.URL_API, colchon);
  }

  getColchones() {
    return this.http.get(this.URL_API);
  }

  putColchon(colchon: Colchon) {
    return this.http.put(this.URL_API + `/${colchon._id}`, colchon);
  }

  deleteColchon(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}