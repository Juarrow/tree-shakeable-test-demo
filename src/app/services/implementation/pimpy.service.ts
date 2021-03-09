import { Injectable } from "@angular/core";
import { AggyService } from "../aggy.service";

@Injectable({
  providedIn: 'root'
})
export class PimpyService implements AggyService {

  private _value = 0;

  constructor() { }

  setValue(value: number): void {
    this._value = value;
  }

  getValue(): number {
    console.log('Value from Pimpy');
    return this._value;
  }

}
