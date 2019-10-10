import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightReactiveComponent,
    FlightEditComponent,
    PassengerSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlightBookingRoutingModule
  ],
  exports: [
    FlightSearchComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
