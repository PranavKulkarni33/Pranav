import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(private http: HttpClient) {

  }

  public getJSON(fileName): Observable<any> {
    return this.http.get(`../../assets/local/${fileName}.json`);
  }
}
