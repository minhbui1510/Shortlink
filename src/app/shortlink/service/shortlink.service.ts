import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LongUrlRequest } from '../model/LongUrlRequest';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import {BaseService} from "../../common/base-sevice.service";

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService extends BaseService{
  constructor(
    private http: HttpClient,
  ) {
    super();
  }
  doCheckLink(body: LongUrlRequest): Observable<any> {
    // return this.http.post<LongUrlRequest>(`${environment.url}shortURL`, body).pipe(map(response => response ? response : {}));
    return  this.doPost(this.getServiceName(), body);
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getServiceName(): string {
    return "shortURL";
  }
}
