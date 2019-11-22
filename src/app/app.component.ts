import { Component } from '@angular/core';
import { QuestionService } from './questions/question.service';
import { PeticionService } from './peticion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*cracion del usuario para poder iniciar sesion */
export class AppComponent {
  title = 'lmb-front';
  formUsuario = [];

  constructor(private serv: QuestionService, private peticion: PeticionService) {
    this.formUsuario = serv.getUsuarioForm();
  }
  peticioCrearUsuario(arg) {
    console.log('PETICION====');
    console.log(arg);
    this.peticion.registrarUsuario(arg).subscribe(
      res => {
        console.log('TODO FUE OK', res);
      },
      err => {
        console.log('ERRRORRR', err);


      }
    );
    console.log('PETICION====');
  }
}
