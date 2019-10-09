import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs';
import { FlightService } from '../flight-booking/services/flight.service';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    filter$: Observable<{ from: string, to: string}>;
    
    private sidebarVisible: boolean = false;

    constructor(private flightService: FlightService) {}
    
    ngOnInit(): void {
        this.filter$ = this.flightService.filterState$;
    }

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
