import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { TotalPagarResultado } from 'src/app/models/total-pagar-resultado';
import { VehiculoMqttService } from 'src/app/services/vehiculo.mqtt.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Registro[] = [];
  totalPagar: TotalPagarResultado = new TotalPagarResultado();
  current: Registro = new Registro();

  constructor(private vehiculoService: VehiculoMqttService) {

  }

  ngOnInit(): void {
    this.esperarNuevoRegistro();
  }

  esperarNuevoRegistro() {
    this.vehiculoService.nuevoVehiculo.subscribe(r => {
      this.listarVehiculosActivos();
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
    this.current = registro;
    const modal = document.getElementById('modal-salida');
    modal?.classList.add('show');
    this.vehiculoService.totalPagar(registro.idVehiculo).subscribe(r => {
      this.totalPagar = r;
    });
  }

  aceptarSalida() {
    this.vehiculoService.darSalida(this.current.idVehiculo).subscribe(r => {
      this.listarVehiculosActivos();
      this.cerrarModal();
    });
  }

  eliminar(registro: Registro) {
    this.vehiculoService.eliminaRegistro(registro.idVehiculo).subscribe(r => { 
      this.listarVehiculosActivos();
    });
  }

  cerrarModal() {
    const modal = document.getElementById('modal-salida');
    modal?.classList.remove('show');
  }
}
