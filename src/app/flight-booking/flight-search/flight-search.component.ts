import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

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

  basket: object = {
    "3": true,
    "5": true
  };

  get flights() {
    return this.flightService.flights;
  }
  
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }
  
  search(): void {
    //console.log('perform search', this.from, this.to);

    this.flightService.filterState$.next({
      from: this.from,
      to: this.to
    });

    this.flightService
      .load(this.from, this.to);
      
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
