import { Injectable } from "@angular/core";
import { ImpyService } from "./implementation/impy.service";

@Injectable({
  providedIn: 'root',
  useClass: ImpyService
})
export abstract class AggyService {

  abstract setValue(value: number): void;

  abstract getValue(): number;

}
