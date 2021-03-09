import { TestBed } from "@angular/core/testing";
import { AggyService } from "./aggy.service";
import { PimpyService } from "./implementation/pimpy.service";

describe('AggyService', () => {
  let service: AggyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: AggyService,
        useClass: PimpyService
      }]
    });

    service = TestBed.inject(AggyService);
  })


  it('should use the pimpy service as it`s implementation', () => {
    service.getValue(); // only here for generating a humble log message
    expect(service instanceof PimpyService).toBeTruthy();
  });

});
