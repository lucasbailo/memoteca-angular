import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: '256 char test class: sadkfjasdfljsdfjsadlfjasdçfmasdlançasdlfndasçlkfasdklfsdafklasdfdlçaskfnasdçklnç ldnvaldkfndsalçkfnasdlçkfaasdlfndasçlkfasdklfsdafklasdfdlçaskfnasdçklnç ldnvaldkfndsalçkfnasdlçkfaasdlfndasçlkfasdklfsdafklasdfdlçaskfnasdçklnç ldnvaldkfndsalçkfnasdlçkfaasdlfndasçlkfasdklfsdafklasdfdlçaskfnasdçklnç ldnvaldkfndsalçkfnasdlçkfasdçflkdsnav ççadfvnçvn vkjsdf çkjv dfçkjv sdfçkjv sdfçkjv dsfçkjvsdfçkjv sdkjv sdfvk vçdskv ',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
