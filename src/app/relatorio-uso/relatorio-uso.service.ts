import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MeuUso } from './MeuUso';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RelatorioUsoService {

  private readonly API = `${environment.API}consultaItensFatura`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<MeuUso[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }
}
