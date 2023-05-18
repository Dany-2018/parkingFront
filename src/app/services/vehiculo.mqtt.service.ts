import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../models/registro';
import { TotalVentasResultado } from '../models/total-ventas-resultado';
import { BrokerService } from './broker';
import { TotalPagarResultado } from '../models/total-pagar-resultado';

@Injectable({
  providedIn: 'root'
})
export class VehiculoMqttService {

  private messageSource = new BehaviorSubject<null>(null);
  nuevoVehiculo = this.messageSource.asObservable();

  private messageUpdate = new BehaviorSubject<Registro | null>(null);
  actualizaVehiculo = this.messageUpdate.asObservable();

  controlador: string = 'vehiculo';
  constructor(private broker: BrokerService) { }

  obtenerVehiculosActivos(): Observable<Registro[]> {
    return this.broker.get(this.controlador);
  }

  guardarRegistro(registro: Registro): Observable<Registro> {
    return this.broker.post(this.controlador, registro);
  }

  darSalida(idVehiculo: number) {
    return this.broker.patch(this.controlador, idVehiculo.toString());
  }

  nuevoRegistro() {
    this.messageSource.next(null);
  }

  eliminaRegistro(id: number): Observable<any> {
    return this.broker.delete(this.controlador, id.toString())
  }

  totalVentas(): Observable<TotalVentasResultado> {
    return this.broker.get<TotalVentasResultado>(this.controlador, 'totalVentas');
  }

  totalPagar(id: number): Observable<TotalPagarResultado> {
    return this.broker.get<TotalPagarResultado>(this.controlador,'GetTotalPagar/' + id.toString());
  }

  seleccionarRegistro(registro: Registro) {
    this.messageUpdate.next(registro);
  }
}