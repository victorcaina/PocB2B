import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatura } from './fatura';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturasService {

  private readonly API = `${environment.API}faturas`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Fatura[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

  loadByID(id) {
    return this.http.get<Fatura>(`${this.API}/${id}`).pipe(take(1));
  }

}
