import { Component, OnInit } from '@angular/core';
import { TotalVentasResultado } from 'src/app/models/total-ventas-resultado';
import { VehiculoMqttService } from 'src/app/services/vehiculo.mqtt.service';

@Component({
  selector: 'app-total-venta',
  templateUrl: './total-venta.component.html',
  styleUrls: ['./total-venta.component.scss']
})
export class TotalVentaComponent implements OnInit {
  
  resultado: TotalVentasResultado = new TotalVentasResultado();

  constructor(private vehiculoService: VehiculoMqttService) {

  }

  ngOnInit(): void {
    this.vehiculoService.totalVentas().subscribe(r => {
      this.resultado = r;
    });
  }
}
