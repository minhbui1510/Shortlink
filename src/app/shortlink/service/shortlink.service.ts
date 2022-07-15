import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LongUrlRequest } from '../model/LongUrlRequest';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService {
  constructor(
    private http: HttpClient,
  ) {
  }
  doCheckLink(body: LongUrlRequest): Observable<any> {
    return this.http.post<LongUrlRequest>(`${environment.url}shortURL`, body).pipe(map(response => response ? response : {}));
  }
}
