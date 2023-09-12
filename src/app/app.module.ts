import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { GenerateThoughtComponent } from './componentes/thoughts/generate-thought/generate-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './componentes/thoughts/list-thought/list-thought.component';
import { ThoughtComponent } from './componentes/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcludeThoughtComponent } from './componentes/thoughts/exclude-thought/exclude-thought.component';
import { EditThoughtComponent } from './componentes/thoughts/edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GenerateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    ExcludeThoughtComponent,
    EditThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
