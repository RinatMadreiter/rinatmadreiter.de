import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit, AfterViewInit {

  displayJS = true;
  displayAngular = true;
  targets = [];
  elpollolocoImgLazyLoaded: boolean = false;
  filterclicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const targetAsHtmlCollection = document.getElementsByClassName('opacity-0');
    this.targets = Array.from(targetAsHtmlCollection);
    this.targets.forEach(this.lazyLoad.bind(this));
  }


  showAll() {
    this.displayJS = true;
    this.displayAngular = true;
    this.filterclicked = true;
  }

  showJS() {
    this.displayJS = true;
    this.displayAngular = false;
    this.filterclicked = true;
  }

  showAngular() {
    this.displayJS = false;
    this.displayAngular = true;
    this.filterclicked = true;
  }


  // lazy Loading and animate imgs from right
  lazyLoad(target) {
    const io = new IntersectionObserver(this._callback);
    io.observe(target);

  };


  _callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.setAttribute('src', src);
        img.classList.add('fade');
        observer.disconnect();
        if (entry.target.id == 'elpolloloco') {
          console.log('El Pollo Loco img with elpolloloco animated');
          console.log('entry is in screen:', entry.target.id);
          this.elpollolocoImgLazyLoaded = true;
        }
      }
    });
  }

}
