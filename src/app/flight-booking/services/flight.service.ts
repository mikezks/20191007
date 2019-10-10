import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../../app.tokens';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights: Flight[] = [];
  filterState$ = new BehaviorSubject<{ from: string, to: string }>({
    from: '',
    to: ''
  });
  flightById: Flight;
  getURL =
    ((baseUrl: string) =>
      (urlKey: string, id?: number) =>
        baseUrl + {
          getFlight: '/flight',
          getFlightById: '/flight/' + id,
          insertFlight: '/flight',
          updateFlight: '/flight/' + id,
        }[urlKey]
    )(this.baseUrl);  

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string) { }

  load(from: string, to: string): void {
    this.find(from, to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error loading flights', err)
      );
  }

  loadById(id: number): void {
    this.findById(id)
      .subscribe(
        flight => this.flightById = flight,
        err => console.error('Error loading flight', err)
      );
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.getURL('getFlight');

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

  findById(id: number): Observable<Flight> {
    const url = this.getURL('getFlightById', id);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight>(url, { headers })
      .pipe(
        tap(flight => console.log('service side effect', flight))
      );
  }
  
  save(inFlight: Flight): Observable<Flight> {
    const url = this.getURL('updateFlight', inFlight.id);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .put<Flight>(url, inFlight, { headers })
      .pipe(
        tap(flight => console.log('service side effect', flight))
      );
  }
}
