import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo:'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  ciarPensamento() {
    alert("OIE")
  }

  cancelar() {
    alert("tchau")
  }

}
