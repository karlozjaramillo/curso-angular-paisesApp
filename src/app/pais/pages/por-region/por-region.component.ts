import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mr-1'
      : 'btn btn-outline-primary mr-1';
  }

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe((paises) => {
      this.paises = paises;
    });
  }
}
