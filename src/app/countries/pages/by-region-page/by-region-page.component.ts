import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  //para poder llamar el servicio tengo que inyectarlo en el constructor
  constructor(private countriesService: CountriesService) { }

  searchByRegion( region: string ): void {
    //ya lo tenemo inyectado en el constructor asi que lo llamamos
    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries; //esto es lo que se va a mostrar en el html
      }, (err) => {
        console.log('Error');
        console.log(err);
      });
  }

  

}
