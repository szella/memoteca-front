import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent {
  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Ser',
    modelo: 'modelo3',
  };
}
