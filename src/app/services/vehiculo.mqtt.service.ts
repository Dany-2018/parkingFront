import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../models/registro';
import { TotalVentasResultado } from '../models/total-ventas-resultado';
import { BrokerService } from './broker';

@Injectable({
  providedIn: 'root'
})
export class VehiculoMqttService {

  private messageSource = new BehaviorSubject<Registro | null>(null);
  nuevoVehiculo = this.messageSource.asObservable();

  private messageUpdate = new BehaviorSubject<Registro | null>(null);
  actualizaVehiculo = this.messageSource.asObservable();

  controlador: string = 'vehiculo';
  constructor(private broker: BrokerService) { }

  obtenerVehiculosActivos(): Observable<Registro[]> {
    return this.broker.get(this.controlador);
  }

  guardarRegistro(registro: Registro): Observable<Registro> {
    return this.broker.post(this.controlador, registro);
  }

  darSalida(idVehiculo: number) {
    return this.broker.post(this.controlador, '');
  }

  nuevoRegistro(registro: Registro) {
    this.messageSource.next(registro);
  }

  eliminaRegistro(id: number): Observable<any> {
    return this.broker.delete(this.controlador, id.toString())
  }

  totalVentas(): Observable<TotalVentasResultado> {
    return this.broker.get<TotalVentasResultado>(this.controlador, 'totalVentas');
  }

  seleccionarRegistro(registro: Registro) {
    this.messageUpdate.next(registro);
  }
}