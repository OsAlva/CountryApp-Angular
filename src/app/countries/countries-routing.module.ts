import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

//definimos nuestras rutas
const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPageComponent,
    },
    {
        path: 'by-country',
        component: ByCountryPageComponent,
    },
    {
        path: 'by-region',
        component: ByRegionPageComponent,
    },
    {
        path: 'by/:id',
        component: CountryPageComponent,
    },
    {
        path: '**', //cualquier otra ruta que no este definida en el arreglo de rutas se redireccionara a home
        redirectTo: 'by-capital'
    },
]

@NgModule({
    imports: [
        //importamos el modulo de rutas
        RouterModule.forChild(routes)
    ],
    exports: [
        //exportamos el modulo de rutas
        RouterModule
    ],
})
export class CountriesRoutingModule { }
