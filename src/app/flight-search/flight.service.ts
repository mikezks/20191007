import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = './api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers })
      .pipe(
        tap(flights => console.log('service side effect', flights))
      );
  }
}
