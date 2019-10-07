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
  //flights: Flight[] = [];
  selectedFlight: Flight;

  get flights() {
    return this.flightService.flights;
  }
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }
  
  search(): void {
    //console.log('perform search', this.from, this.to);

    this.flightService
      .load(this.from, this.to);
      
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
