import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
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

export function validateCityWithParams(validCities: string[]): ValidatorFn {

  return (control: AbstractControl) => {
    if (control.value && validCities.indexOf(control.value) === -1) {
      return {
        city: {
          actualValue: control.value,
          validCities
        }
      };
    }

    return null;
  };
}
