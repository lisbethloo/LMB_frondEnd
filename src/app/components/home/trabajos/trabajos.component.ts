import { Component, OnInit } from '@angular/core';
import { TrabajosService } from './trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  trabajos: any = [];
  constructor(private trabajosService: TrabajosService) { }

  ngOnInit() {
    this.getTrabajos();
  }

  getTrabajos() {
    this.trabajosService.getTrabajos().subscribe(
      data => {
        this.trabajos = data;
        console.log(this.trabajos);
      },
      err => {
        console.error(err);
      });

  }
}
