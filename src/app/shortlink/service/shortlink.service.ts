import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/dist/types";
import {BaseSeviceService} from "../../common/base-sevice.service";

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService extends BaseSeviceService{
  constructor() {
    super();
  }
  doCheckLink(){
    this.doPost()
  }
}
