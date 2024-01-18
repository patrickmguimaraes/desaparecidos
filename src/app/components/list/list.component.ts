import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DesaparecidoResult, DesaparecidosService } from '../../services/desaparecidos.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Desaparecido } from '../../models/desaparecido';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DesaparecidoComponent } from '../desaparecido/desaparecido.component';
import { LoadingService } from '../../services/loading.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule, 
    MatPaginatorModule,
    DesaparecidoComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'foto'];
  dataSource: MatTableDataSource<Desaparecido> | null = null;
  result: DesaparecidoResult;
  pagina: number = 0;
  nome: string = "";
  idadeMin: number = 0;
  idadeMax: number = 0;
  sexo: string = "";

  constructor(private desaparecidosService: DesaparecidosService, private cdref: ChangeDetectorRef, private loading: LoadingService) {

  }

  ngOnInit(): void {
    this.filtrar();
  }

  mudarPagina(valor: number) {
    this.pagina = this.pagina + valor;
    this.filtrar();
  }

  filtrar() {
    this.loading.loading = true;

    this.desaparecidosService.filtro(this.pagina, this.nome, this.sexo, this.idadeMin, this.idadeMax).subscribe(result => {
      this.result = result;
      this.dataSource = new MatTableDataSource<Desaparecido>(result.content);
      this.cdref.detectChanges();

      setTimeout(() => {
        this.loading.loading = false;
      }, 3000);
    });
  }
}
