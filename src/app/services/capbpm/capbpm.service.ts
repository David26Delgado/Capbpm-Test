import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapbpmService {

  constructor(
    private http: HttpClient
  ) { }

  getList() {
    return this.http.get(environment.api_url);
  }
}
