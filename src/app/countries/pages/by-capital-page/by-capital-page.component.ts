import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  
  public countries: Country[] = [];

  //para poder llamar el servicio tengo que inyectarlo en el constructor
  constructor(private countriesService: CountriesService) { }

  

  searchByCapital( term: string ): void {
    //ya lo tenemo inyectado en el constructor asi que lo llamamos
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
      }, (err) => {
        console.log('Error');
        console.log(err);
      });
  } 
}
