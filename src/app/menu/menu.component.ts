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
    console.info('the above waring message is displayed by default on all GitHub Pages websites, for more information click at the link below (from github)');
    console.info('https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/');
  }


  openMenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }


}
