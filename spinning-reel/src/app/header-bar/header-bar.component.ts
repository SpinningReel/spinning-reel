import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @ViewChild("shortContacts") shortContacts: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    if (this.shortContacts) {
      this.shortContacts.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

}
