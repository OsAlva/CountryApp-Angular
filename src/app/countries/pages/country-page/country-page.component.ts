import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router,
    
  ) { //para poder leer los parametros de la ruta activa

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.CountriesService.searchCountryByAlphaCode(id)), //recibe el valor anterior y retorna un nuevo observable
    )
    .subscribe( country => {
     
     if(!country) return this.router.navigateByUrl('/'); //si no existe el pais redirecciono al home
       
     

    return this.country = country;
  


    });
    
  }

  

}
