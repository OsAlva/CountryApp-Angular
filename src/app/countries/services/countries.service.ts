import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiurl:string = 'https://restcountries.com/v3.1';


    constructor(private http: HttpClient) { }

     searchCapital(term: string): Observable<Country[]> {
        const url =`${this.apiurl}/capital/${term}`;
        //si no hay termino no hago la peticion
        // if(!term) {
        //     return new Observable<Country[]>(() => {});
        // }

        //retorno un observable de tipo country pero no estoy suscrito a el por eso me tengo que subscribir en el componente
            return this.http.get<Country[]>(url)
                .pipe(
                    catchError( () => of([]) ), //si hay un error retorno un arreglo vacio para que no se rompa la aplicacion y pueda seguir funcionando
                    ); 
     }

    searchCountry(term: string): Observable<Country[]> {
        const url =`${this.apiurl}/name/${term}`;
        //si no hay termino no hago la peticion
        if(!term) {
             return new Observable<Country[]>(() => {});
         }
            return this.http.get<Country[]>(url)
                .pipe(
                    catchError( () => of([]) ), //si hay un error retorno un arreglo vacio para que no se rompa la aplicacion y pueda seguir funcionando
                    );
    }

    searchRegion(region: string): Observable<Country[]> {
        const url =`${this.apiurl}/region/${region}`;
        //si no hay termino no hago la peticion
        if(!region) {
                return new Observable<Country[]>(() => {});
            }
            return this.http.get<Country[]>(url)
    }

    
}