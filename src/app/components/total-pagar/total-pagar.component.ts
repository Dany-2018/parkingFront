import { Component, OnInit } from '@angular/core';
import { TotalPagarResultado } from 'src/app/models/total-pagar-resultado';
import { VehiculoMqttService } from 'src/app/services/vehiculo.mqtt.service';

@Component({
  selector: 'app-total-pagar',
  templateUrl: './total-pagar.component.html',
  styleUrls: ['./total-pagar.component.scss']
})
export class TotalPagarComponent implements OnInit {
  
  resultado: TotalPagarResultado = new TotalPagarResultado();

  constructor(private vehiculoService: VehiculoMqttService) {

  }

  ngOnInit(): void {
   
  }
}
