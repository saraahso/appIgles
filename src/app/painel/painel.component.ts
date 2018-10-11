import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: string): void {
    this.resposta = (event.target as HTMLInputElement).value;

  }

  public verificarResposta(): void {

    this.rodada++
    this.progresso = this.progresso + (100 / this.frases.length)

    //atualiza o objeto rodadaFrase
    this.atualizaRodada()


    if (this.rodadaFrase.frasePT == this.resposta) {
      alert('A tradução está correta')
    } else {
      alert('A tradução está errada')
    }

  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpa a resposta
    this.resposta = ''
  }

}
