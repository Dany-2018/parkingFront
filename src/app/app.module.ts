import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment as env } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TotalVentaComponent } from './components/total-venta/total-venta.component';
import { TotalPagarComponent } from './components/total-pagar/total-pagar.component';


const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListaVehiculosComponent,
    TotalVentaComponent,
    TotalPagarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
