import { Component, OnInit } from '@angular/core';
import { Flight } from './entities/flight';

interface ReducedFlight {
  id: number;
  from: string;
  to: string;
}

@Component({
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Angular!';
  components = [
    { key: 'flight-search', label: 'Flight Search' },
    { key: 'flight-edit', label: 'Flight Edit' },
    { key: 'flight-reactive', label: 'Flight Reactive' }
  ];
  showComponent = this.components[1].key;

  ngOnInit(): void {
    // Flight Object
    const flight: Flight = {
      id: 1,
      from: 'Graz',
      to: 'Berlin',
      date: (new Date()).toISOString(),
      delayed: true
    };

    // Form data representing a Flight; w/o 'delayed', w/ 'loadId'
    const rxFormData = {
      loadId: 10,
      id: 1,
      from: 'Graz',
      to: 'Berlin',
      date: (new Date()).toISOString(),
    };

    // New Flight object composed of form data and 'delayed' from Flight 
    const newFlight = {
      ...rxFormData,
      delayed: flight.delayed
    };

    // Array of Flights
    const flights = [
      {
        id: 1,
        from: 'Graz',
        to: 'Berlin',
        date: (new Date()).toISOString(),
        delayed: true
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Berlin',
        date: (new Date()).toISOString(),
        delayed: true
      }
    ];

    // Filtered Array takes only Flight w/ index 1
    // and adds it to a new Array with the Spread Operator (...)
    // w/ another Flight (id: 3)
    const filterFlights = [
      ...flights.slice(1, 1),
      {
        id: 3,
        from: 'Graz',
        to: 'Berlin',
        date: (new Date()).toISOString(),
        delayed: true
      }
    ];

    // Deconstructing an object
    // Use the property name, that you want to exclude
    // Write all teh other parameter to a new variable
    const { loadId, ...flightFormData } =  rxFormData;

    // Take all properties of one object
    // Add or overwrite a property for the new object
    const flightDto = { ...flightFormData, delayed: true };
   
    console.log('loadId', loadId);
    console.log('flight', flightDto);
  }
}
