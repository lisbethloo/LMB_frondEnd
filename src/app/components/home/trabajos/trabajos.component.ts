import { Component, OnInit } from '@angular/core';
import { TrabajosService } from './trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  publicaciones: any = [];
  constructor(private trabajosService: TrabajosService) { }

  ngOnInit() {
    this.getPublicacion();
  }

  getPublicacion() {
      this.trabajosService.getPublicaciones().subscribe(
        data => {
          this.publicaciones = data;
          console.log(this.publicaciones);
        },
        err => {
          console.error(err);
        });

  }
}
