import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-link',
  templateUrl: './output-link.component.html',
  styleUrls: ['./output-link.component.scss']
})
export class OutputLinkComponent implements OnInit {
  @Input() link = '';
  constructor() { }

  ngOnInit(): void {
  }

}
