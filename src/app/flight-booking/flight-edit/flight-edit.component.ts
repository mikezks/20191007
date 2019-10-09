import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [
        1
      ],
      from: [
        'Hamburg', [
          Validators.required,
          Validators.minLength(3)
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
  }

  save(): void {
    console.log('saved form data', this.editForm.value);
  }
}
