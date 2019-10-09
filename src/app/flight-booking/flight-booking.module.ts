import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FlightSearchComponent,
    FlightReactiveComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
