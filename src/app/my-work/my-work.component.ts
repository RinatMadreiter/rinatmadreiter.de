import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  displayJS = true;
  displayAngular = true;


  constructor() { }

  ngOnInit(): void {
  }


  showAll() {
    this.displayJS = true;
    this.displayAngular = true;
  }

  showJS() {
    this.displayJS = true;
    this.displayAngular = false;
  }

  showAngular() {
    this.displayJS = false;
    this.displayAngular = true;
  }

}
