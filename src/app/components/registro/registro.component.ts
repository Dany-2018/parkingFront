import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/models/registro';
import { VehiculoMqttService } from 'src/app/services/vehiculo.mqtt.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Output() cerrado = new EventEmitter<boolean>();
  form: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private vehiculoService: VehiculoMqttService) { }

  get c() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  seleccionaRegistro() {
    this.vehiculoService.actualizaVehiculo.subscribe(s => {
      if (!s) {
        return;
      }
      this.form.patchValue(s);
    });
  }

  initForm() {
    this.form = this.builder.group({
      idVehiculo: [0],
      placa: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      plaza: ['', [Validators.required]],
      aplicaDescuento: [false]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.vehiculoService.guardarRegistro(this.form.value as Registro).subscribe(r => {
      this.vehiculoService.nuevoRegistro(r);
    });
  }

  cerrarParqueadero() {
    this.cerrado.emit(true);
  }
}
