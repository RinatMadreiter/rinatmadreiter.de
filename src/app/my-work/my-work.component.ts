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


  // lazy Loading imgs
   targets = document.querySelectorAll('img');

   lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      console.log(entries)
      entries.forEach(entry => {
        console.log('😍');

        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy');

          img.setAttribute('src', src);
          img.classList.add('fade');

          observer.disconnect();
        }
      });
    });

    io.observe(target)
  };

this.targets.forEach(this.lazyLoad);

}
