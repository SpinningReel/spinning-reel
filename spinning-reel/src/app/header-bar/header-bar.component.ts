import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input()
  isSummary: boolean = false;

  @ViewChild("shortContacts")
  shortContacts: ElementRef | undefined;

  @ViewChild("buttonBookNow")
  buttonBookNow: ElementRef | undefined;

  @HostListener('click', ['$event'])
  clickInside($event: any) {
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickOutside() {
    this.isChecked = false;
  }

  @HostListener('document:scroll', ['$event'])
  scrollOutside() {
    this.isChecked = false;
  }

  isChecked: boolean = false;

  constructor() { }

  navToggle(): void {
    this.isChecked = !this.isChecked;
  }

  ngOnInit(): void {
    if (this.shortContacts) {
      this.shortContacts.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (this.buttonBookNow) {
      this.buttonBookNow.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

}
