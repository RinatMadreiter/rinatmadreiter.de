import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  openMenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
      console.log('menu opened');
    } else {
      this.menuOpen = false;
      console.log('menu closed');
    }
  }
}
