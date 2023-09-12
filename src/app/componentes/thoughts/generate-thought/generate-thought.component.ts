import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-thought',
  templateUrl: './generate-thought.component.html',
  styleUrls: ['./generate-thought.component.css'],
})
export class GenerateThoughtComponent implements OnInit {
  pensamento: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThought() {
    this.service
      .criar(this.pensamento)
      .subscribe(() => this.router.navigate(['./Thoughts']));
  }

  cancelThought() {
    this.router.navigate(['./Thoughts']);
  }
}
