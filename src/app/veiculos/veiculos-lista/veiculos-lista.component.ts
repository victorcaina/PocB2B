import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Observable, Subject, empty } from 'rxjs';
import { Veiculo } from '../veiculo';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-veiculos-lista',
  templateUrl: './veiculos-lista.component.html',
  styleUrls: ['./veiculos-lista.component.css'],
  preserveWhitespaces: true
})
export class VeiculosListaComponent implements OnInit {

  veiculos$: Observable<Veiculo[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: VeiculosService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.veiculos$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
  }

}
