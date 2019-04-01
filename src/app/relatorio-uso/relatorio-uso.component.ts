import { Component, OnInit } from '@angular/core';
import { MeuUso } from './MeuUso';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { RelatorioUsoService } from './relatorio-uso.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-relatorio-uso',
  templateUrl: './relatorio-uso.component.html',
  styleUrls: ['./relatorio-uso.component.css']
})
export class RelatorioUsoComponent implements OnInit {


  meuuso$: Observable<MeuUso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: RelatorioUsoService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.meuuso$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
  }

}
