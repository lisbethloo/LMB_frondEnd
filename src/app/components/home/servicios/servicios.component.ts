import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor(private serviciosService: ServiciosService) { }
  publicaciones: any;
  ngOnInit() {
    this.getPublicacion();
  }
  getPublicacion() {
    this.serviciosService.getPublicaciones().subscribe(
      data => {
        this.publicaciones = data;
        console.log(this.publicaciones);
      },
      err => {
        console.error(err);
      });

  }
}
