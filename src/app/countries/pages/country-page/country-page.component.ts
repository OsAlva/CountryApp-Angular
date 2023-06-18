import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    
  ) { //para poder leer los parametros de la ruta activa

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.CountriesService.searchCountryByAlphaCode(id)), //recibe el valor anterior y retorna un nuevo observable
    )
    .subscribe( country => {
      console.log(country);
     


    });
    
  }

  

}
