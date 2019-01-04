import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {
  constructor(private http: HttpClient) { }

  getPersonData() {
    return this.http.get('assets/person.json');
  }

  getAddressData() {
    return this.http.get('assets/address.json');
  }
}
