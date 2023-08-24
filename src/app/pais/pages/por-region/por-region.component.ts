import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mr-1'
      : 'btn btn-outline-primary mr-1';
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }
}
