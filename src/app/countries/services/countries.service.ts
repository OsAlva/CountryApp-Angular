import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiurl:string = 'https://restcountries.com/v3.1';


    constructor(private http: HttpClient) { }

     searchCapital(term: string): Observable<Country[]> {
        const url =`${this.apiurl}/capital/${term}`;
        //retorno un observable de tipo country pero no estoy suscrito a el por eso me tengo que subscribir en el componente
            return this.http.get<Country[]>(url); 
     }
    
}