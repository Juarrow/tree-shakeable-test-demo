import { Injectable } from "@angular/core";
import { AggyService } from "../aggy.service";

@Injectable()
export class ImpyService implements AggyService {

  private _value = 1;

  constructor() { }

  setValue(value: number): void {
    this._value = value;
  }

  getValue(): number {
    console.log('value from impy');
    return this._value;
  }

}
