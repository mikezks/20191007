import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';


const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
          path: 'flight-edit',
          component: FlightEditComponent
      },
      {
          path: 'flight-reactive',
          component: FlightReactiveComponent
      },
      {
          path: 'passenger-search',
          component: PassengerSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
