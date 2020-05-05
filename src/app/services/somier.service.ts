import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Somier } from '../models/somier.model';

@Injectable({
  providedIn: 'root'
})
export class SomierService {

  selectedSomier: Somier;
  somieres: Somier[];
  
  readonly URL_API = 'http://localhost:3000/api/somieres';

  constructor(private http: HttpClient) {
    this.selectedSomier = new Somier();
  }

  postSomier(somier: Somier) {
    return this.http.post(this.URL_API, somier);
  }

  getSomieres() {
    return this.http.get(this.URL_API);
  }

  putSomier(somier: Somier) {
    return this.http.put(this.URL_API + `/${somier._id}`, somier);
  }

  deleteSomier(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}