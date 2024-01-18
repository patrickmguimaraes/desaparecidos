import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Desaparecido } from '../../models/desaparecido';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { PhotoPipe } from '../../pipes/photo.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-desaparecido',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    ShareButtonsModule,
    ShareIconsModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  templateUrl: './desaparecido.component.html',
  styleUrl: './desaparecido.component.scss'
})
export class DesaparecidoComponent implements OnChanges {
  @Input("desaparecido") desaparecido: Desaparecido;
  description: string = "Desaparecidos é um site que ajuda encontrar pessoas desaparecidas."
  tags: string = "NinguémEstáSozinho";
  url: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if(this.desaparecido) {
      this.url = window.location.origin + "/desaparecido/" + this.desaparecido.id;
      this.description = this.description + " Ajude a encontrar " + this.desaparecido.nome + ".";
    }
  }
}
