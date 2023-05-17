import { Injectable } from "@angular/core";
import { IMqttMessage, IMqttServiceOptions, MqttConnectionState, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MqttBroker {

    constructor(private mqttService: MqttService) {
        
    }

    connect():Observable<MqttConnectionState>{
        const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
          hostname: 'broker.hivemq.com',
          port: 8000,
          protocol: "ws",
          path: '/mqtt'
        };
        this.mqttService.connect(MQTT_SERVICE_OPTIONS);
        return this.mqttService.state;
      }

    post<T>(controlador: string, metodo: string, body: any): Observable<IMqttMessage> {
        let url = `/${controlador}${(metodo) ? `/${metodo}` : ''}`;     
        return this.mqttService.observe(url);
    }

    get<T>(controlador: string, metodo: string = ''): Observable<IMqttMessage> {
        let url = `/${controlador}${(metodo) ? `/${metodo}` : ''}`;       
        return this.mqttService.observe(url);
    }
}