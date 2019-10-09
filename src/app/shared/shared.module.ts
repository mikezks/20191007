import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityPipe } from './pipes/city.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { CityValidatorDirective } from './validators/city-validator.directive';



@NgModule({
  declarations: [
    CityPipe,
    StatusColorPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    CityPipe,
    StatusColorPipe,
    CityValidatorDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
