import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../trabajos/trabajos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  trabajo: any;
  constructor(private trabajos: TrabajosService) { }

  ngOnInit() {
    this.getTrabajos();
  }

  getTrabajos() {
    this.trabajos.getTrabajos().subscribe(
      res => this.trabajo = res,
      err => console.log(err)
    );
  }


}
