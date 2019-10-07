import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }
  
  search(): void {
    //console.log('perform search', this.from, this.to);

    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error loading flights', err)
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
