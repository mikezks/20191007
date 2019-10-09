import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello Angular!';
  components = [
    { key: 'flight-search', label: 'Flight Search' },
    { key: 'flight-edit', label: 'Flight Edit' },
    { key: 'flight-reactive', label: 'Flight Reactive' }
  ];
  showComponent = this.components[1].key;
}
