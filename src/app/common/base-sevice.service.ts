import {ApiResultResponse} from "./model/result-response";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import {DEBUG} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  private baseUrl = '';
  private basePath = '';

  constructor() {
    this.baseUrl = environment.url;
  }

  abstract getHttp(): HttpClient;

  abstract getServiceName(): string;

  protected doGet(url: string, httpParams?: HttpParams, httpHeaders?: HttpHeaders): Observable<ApiResultResponse> {
    const requestUrl =`${this.baseUrl}${this.basePath}${url}`;
    return this.getHttp().get<ApiResultResponse>(requestUrl, { headers: httpHeaders, params: httpParams });
  }

  protected doPost(url: string, body: any, httpParams?: HttpParams, httpHeaders?: HttpHeaders): Observable<ApiResultResponse> {
    const requestUrl =`${this.baseUrl}${this.basePath}${url}`;
    return this.getHttp().post<ApiResultResponse>(requestUrl, body || {}, {
      headers: httpHeaders,
      params: httpParams
    });
  }

  protected postDataBlob(url: string, body: any, header?: HttpHeaders, inputParams?: HttpParams): Observable<any> {
    const requestUrl =`${this.baseUrl}${this.basePath}${url}`;
    return this.getHttp().post<any>(requestUrl, body, { headers: header, params: inputParams, responseType: 'blob' as 'json' });
  }

  protected doDelete(url: string, httpParams?: HttpParams, httpHeaders?: HttpHeaders) {
    const requestUrl =`${this.baseUrl}${this.basePath}${url}`;
    return this.getHttp().delete<ApiResultResponse>(requestUrl, { headers: httpHeaders, params: httpParams });
  }

  public logDebug(value: any) {
    if (!environment.production) {
      // console.log(${this.getServiceName()} [DEBUG]:, value);
    }
  }
}
