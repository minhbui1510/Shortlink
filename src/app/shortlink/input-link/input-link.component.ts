import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss']
})
export class InputLinkComponent implements OnInit {
  link: string = '';
  urlGetLink = '';
  err = '';
  constructor() { }

  ngOnInit(): void {
  }
  getLink(): void {
    if (this.link === ''){
      this.err = 'Không được để trống';
      return;
    }if (this.link !== ''){
      this.err = '';
      this.urlGetLink = this.link;
      return;
    }
  }
}
