import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parqueadero';
  cerrado: boolean = false;
  
  cerrar(cerrado: boolean) {
    this.cerrado = cerrado;
  }

}
