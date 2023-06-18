import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

    //para poder llamar el servicio tengo que inyectarlo en el constructor
  constructor(private countriesService: CountriesService) { }

  searchByCountry( term: string ): void {
    //ya lo tenemo inyectado en el constructor asi que lo llamamos
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries; //esto es lo que se va a mostrar en el html
      }, (err) => {
        console.log('Error');
        console.log(err);
      });
  }
}
