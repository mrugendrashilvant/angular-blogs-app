import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  BASE_API_URL = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getSampleData() {
    return this.http.get(this.BASE_API_URL+"get-blogs");
  }

}
