import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() pensamento: Thought = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Bruno',
    modelo: 'modelo2',
  };

  constructor() {}

  ngOnInit(): void {}

  thoughtWidth(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
