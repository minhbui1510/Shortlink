import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LongUrlRequest } from '../model/LongUrlRequest';
import { ShortlinkService } from '../service/shortlink.service';

@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss']
})
export class InputLinkComponent implements OnInit {
  link: string = '';
  urlGetLink = '';
  err = '';
  constructor(
    private shortlinkService: ShortlinkService
  ) { }

  ngOnInit(): void {
  }
  getLink() {
    if (this.link === '') {
      this.err = 'Không được để trống';
      return;
    } if (this.link !== '') {
      this.err = '';
      const request: LongUrlRequest = {
        longUrl: this.link
      }
      this.shortlinkService.doCheckLink(request).subscribe(res => {
        console.log(res);

      })
    }
  }
}
