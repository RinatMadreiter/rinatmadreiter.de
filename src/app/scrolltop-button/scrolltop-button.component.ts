import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolltop-button',
  templateUrl: './scrolltop-button.component.html',
  styleUrls: ['./scrolltop-button.component.scss']
})
export class ScrolltopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTopContainer = document.getElementById("scrollToTopContainer");
  rootElement = document.documentElement;

  scrollToTop() {
    this.rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

}
