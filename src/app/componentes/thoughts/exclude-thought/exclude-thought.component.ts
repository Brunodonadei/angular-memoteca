import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclude-thought',
  templateUrl: './exclude-thought.component.html',
  styleUrls: ['./exclude-thought.component.css'],
})
export class ExcludeThoughtComponent implements OnInit {
  pensamento: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo3',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((pensamento) => (this.pensamento = pensamento));
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/Thoughts']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/Thoughts']);
  }
}
