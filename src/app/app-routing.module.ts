import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateThoughtComponent } from './componentes/thoughts/generate-thought/generate-thought.component';
import { ListThoughtComponent } from './componentes/thoughts/list-thought/list-thought.component';
import { ExcludeThoughtComponent } from './componentes/thoughts/exclude-thought/exclude-thought.component';
import { EditThoughtComponent } from './componentes/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Thoughts',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: GenerateThoughtComponent,
  },
  {
    path: 'Thoughts',
    component: ListThoughtComponent,
  },
  {
    path: 'Thoughts/deleteThought/:id',
    component: ExcludeThoughtComponent,
  },
  {
    path: 'Thoughts/editThought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
