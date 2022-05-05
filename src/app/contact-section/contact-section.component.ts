import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  emailSent() {
    document.getElementById('responseSentEmail').classList.remove('d-none');
    document.getElementsByTagName('form')[0].classList.add('d-none');
    setTimeout(() => {
      document.getElementById('responseSentEmail').classList.add('d-none');
      document.getElementsByTagName('form')[0].classList.remove('d-none');
    }, 1500);
  }
}
