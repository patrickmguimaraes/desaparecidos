import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { Desaparecido } from '../../models/desaparecido';
import { LoadingService } from '../../services/loading.service';
import { DesaparecidosService } from '../../services/desaparecidos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';

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
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    DatePipe,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './desaparecido.component.html',
  styleUrl: './desaparecido.component.scss'
})
export class DesaparecidoComponent implements OnInit {
  desaparecido: Desaparecido;
  description: string = "Desaparecidos é um site que ajuda encontrar pessoas desaparecidas."
  tags: string = "NinguémEstáSozinho";
  url: string = "";

  constructor(private router:Router, private cdref: ChangeDetectorRef, private route: ActivatedRoute, private loading: LoadingService,
    private desaparecidoService: DesaparecidosService, private title: Title) {
    this.loading.loading = true;
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.desaparecidoService.getDesaparecido(this.route.snapshot.params['id']).subscribe(result => {
        if(result) {
          this.desaparecido = result;
          this.url = window.location.origin + "/desaparecido/" + this.desaparecido.id;
          this.description = this.description + " Ajude a encontrar " + this.desaparecido.nome + ".";
          this.title.setTitle("Desaparecidos - " + this.desaparecido.nome);
        }
        else {
          this.router.navigate(["page-not-found"]);
        }

        this.loading.loading = false;
      })
    }
    else {
      this.router.navigate(["page-not-found"]);
    }
  }
}
