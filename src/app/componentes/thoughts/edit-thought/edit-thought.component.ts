import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  pensamento: Thought = {
    id: 0,
    conteudo: 'teste',
    autoria: 'teste',
    modelo: 'modelo2',
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
      .subscribe((thought) => (this.pensamento = thought));
  }

  editThought() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['Thoughts']);
    });
  }

  cancelThought() {
    this.router.navigate(['Thoughts']);
  }
}
