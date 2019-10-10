import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-booking/flight-search/flight-search.component";
import { HomeComponent } from "./home/home.component";
import { FlightEditComponent } from "./flight-booking/flight-edit/flight-edit.component";
import { FlightReactiveComponent } from "./flight-booking/flight-reactive/flight-reactive.component";
import { PassengerSearchComponent } from "./flight-booking/passenger-search/passenger-search.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
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
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
