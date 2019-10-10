import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../shared/validators/validateCity';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private flightService: FlightService) { }

  ngOnInit() {

     this.editForm = this.fb.group({
      id: [
        1
      ],
      from: [
        'Hamburg', [
          Validators.required,
          Validators.minLength(3),
          //validateCity,
          validateCityWithParams(['Wien', 'Berlin'])
        ]
      ],
      to: [
        'Graz', [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      date: [
        ''
      ]
    });

    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('touched', this.editForm.touched);
    console.log('dirty', this.editForm.dirty);

    this.editForm.valueChanges
      .subscribe(console.log);

    this.route.paramMap
      .pipe(
        switchMap(params =>
          this.flightService.findById(parseInt(params.get('id'), 0))
        )
      )
      .subscribe(flight => {
        const { delayed, ...editFormFlight } = flight;
        this.editForm.patchValue(editFormFlight);
      });

  }

  save(): void {
    //console.log('saved form data', this.editForm.value);
    this.flightService.save({
      ...this.editForm.value,
      delayed: false
    })
      .subscribe();
  }
}
