import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Validators } from '@angular/forms';
import { CheckboxQuestion } from './question-checkbox';

@Injectable({ providedIn: 'root' })
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'asdf', value: '123' },
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        show: true
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'Primer Nombre',
        value: '5',
        type: '',
        required: true,
        order: 1,
        show: true
      }),
      new TextboxQuestion({
        key: 'surname',
        label: 'Primer Apellido',
        value: '',
        required: true,
        order: 4,
        show: true
      }),
      new CheckboxQuestion({
        key: 'work123',
        label: 'Trabaja?',
        value: true,
        order: 5,
        show: true
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        show: true,
        validators: [Validators.email]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getUsuarioForm() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'role',
        label: 'Rol',
        options: [
          { key: 1, value: 1 },
          { key: 2, value: 2 },
          // { key: 'great', value: 'Great' },
          // { key: 'good', value: 'Good' },
          // { key: 'unproven', value: 'Unproven' }
        ],
        order: 3,
        show: true
      }),

      new TextboxQuestion({
        key: 'user',
        label: 'Usuario',
        value: '',
        type: '',
        required: true,
        order: 1,
        show: true
      }),
      new TextboxQuestion({
        key: 'nombre',
        label: 'Nombre',
        value: '',
        type: '',
        required: true,
        order: 2,
        show: true
      }),
      new TextboxQuestion({
        key: 'apellido',
        label: 'Apellido',
        value: '',
        type: '',
        required: true,
        order: 3,
        show: true
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Correo Electronico',
        type: 'email',
        order: 4,
        show: true,
        validators: [Validators.required, Validators.email]
      }),

      new TextboxQuestion({
        key: 'telefono',
        label: 'Telefono',
        value: '',
        type: '',
        required: true,
        order: 5,
        show: true
      }),
      new TextboxQuestion({
        key: 'descripcion',
        label: 'Descripcion',
        value: '',
        type: '',
        required: true,
        order: 6,
        show: true
      }),
      new TextboxQuestion({
        key: 'puntos',
        label: 'Puntos',
        value: 0,
        type: 'number',
        required: true,
        order: 7,
        show: true
      }),
      new TextboxQuestion({
        key: 'clave',
        label: 'Clave',
        value: 0,
        type: 'password',
        required: true,
        order: 8,
        show: true
      }),
      //   new TextboxQuestion({
      //     key: 'surname',
      //     label: 'Primer Apellido',
      //     value: '',
      //     required: true,
      //     order: 4,
      //     show: true
      //   }),
      //   new CheckboxQuestion({
      //     key: 'work123',
      //     label: 'Trabaja?',
      //     value: true,
      //     order: 5,
      //     show: true
      //   }),

      //   new TextboxQuestion({
      //     key: 'emailAddress',
      //     label: 'Email',
      //     type: 'email',
      //     order: 2,
      //     show: true,
      //     validators: [Validators.email]
      //   })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
