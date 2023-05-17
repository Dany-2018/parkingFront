import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validador',
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.scss']
})
export class ValidadorComponent {

  @Input() control: AbstractControl | null = null;

}
