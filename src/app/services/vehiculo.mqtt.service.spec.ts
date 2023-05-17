import { TestBed } from '@angular/core/testing';

import { VehiculoMqttService } from './vehiculo.mqtt.service';

describe('VehiculoMqttService', () => {
  let service: VehiculoMqttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoMqttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
