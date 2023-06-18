import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  //para la resolucion de la tarea 117 de search-box
  //1. creamos un evento que se va a emitir cuando se presione enter
  //2. en el componente padre (by-capital-page) vamos a escuchar ese evento
  //3. en el componente padre (by-capital-page) vamos a ejecutar la busqueda
  //4. en el componente padre (by-capital-page) vamos a mostrar los resultados
  //5. en el componente padre (by-capital-page) vamos a mostrar un mensaje de error si es necesario
  @Output()
  onValue = new EventEmitter<string>();

  @Input() 
  public placeholder: string = '';

  //creamos el metodo para emitir el evento luego de llamarlo en el html del componente
  emitValue( value: string ): void {
    this.onValue.emit( value );
  }


}
