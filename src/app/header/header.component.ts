import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currData:Object
  link:string
  constructor() {}
  ngOnInit() {
    this.link = `https://www.floatrates.com/daily/${(this.currData['code'] as string).toLowerCase()}.json`
  }
}
