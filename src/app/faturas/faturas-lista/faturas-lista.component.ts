import { Component, OnInit, ViewChild } from '@angular/core';
import { FaturasService } from '../faturas.service';
import { Fatura } from '../fatura';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-faturas-lista',
  templateUrl: './faturas-lista.component.html',
  styleUrls: ['./faturas-lista.component.css'],
  preserveWhitespaces: true
})

export class FaturasListaComponent implements OnInit {

  // faturas: Fatura[];

  faturas$: Observable<Fatura[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: FaturasService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.faturas$ = this.service.list().pipe(
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
