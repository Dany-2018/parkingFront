import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { VehiculoMqttService } from 'src/app/services/vehiculo.mqtt.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Registro[] = [];

  constructor(private vehiculoService: VehiculoMqttService) {

  }

  ngOnInit(): void {
    this.esperarNuevoRegistro();
    this.listarVehiculosActivos();
  }

  esperarNuevoRegistro() {
    this.vehiculoService.nuevoVehiculo.subscribe(r => {
      if (!r) {
        return;
      }
      this.vehiculos.push(r);
    });
  }

  listarVehiculosActivos() {
    this.vehiculoService.obtenerVehiculosActivos().subscribe(r => {
      this.vehiculos = r;
    });
  }

  seleccionaRegistro(registro: Registro) {
    this.vehiculoService.seleccionarRegistro(registro);
  }

  darSalida(registro: Registro) {
    this.vehiculoService.darSalida(registro.idVehiculo).subscribe(r => {
      this.listarVehiculosActivos();
    });
  }

  eliminar(registro: Registro) {
    this.vehiculoService.eliminaRegistro(registro.idVehiculo).subscribe(r => { 
      this.listarVehiculosActivos();
    });
  }
}
