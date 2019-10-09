import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: 'input[city]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: CityValidatorDirective,
		multi: true
	}]
})
export class CityValidatorDirective implements Validator {
	constructor() { }

	validate(control: AbstractControl): ValidationErrors | null {
		const validCities = [
			'Hamburg',
			'Graz'
		];

		if (control.value && validCities.indexOf(control.value) === -1) {
			return {
				city: {
					actualValue: control.value,
					validCities
				}
			};
		}

		return null;
	}
}
