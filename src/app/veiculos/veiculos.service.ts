import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from './veiculo';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = `${environment.API}veiculos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Veiculo[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

  private create(veiculo) {
    return this.http.post(this.API, veiculo).pipe(take(1));
  }

  private update(veiculo) {
    return this.http.put(`${this.API}/${veiculo.id}`, veiculo).pipe(take(1));
}

  save(veiculo) {
    if (veiculo.id) {
      return this.update(veiculo);
    }

    return this.create(veiculo);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
