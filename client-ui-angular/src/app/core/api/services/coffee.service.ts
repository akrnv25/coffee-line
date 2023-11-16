import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Coffee } from '@app/core/api/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(id: number): Observable<Coffee> {
    return this.httpClient.get<Coffee>(`${environment.apiUrl}/coffee/${id}`);
  }
}
