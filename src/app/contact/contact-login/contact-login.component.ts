import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'ca-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css']
})
export class ContactLoginComponent implements OnInit {

  userName: string;
  passWord: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {

    console.log(this.userName + ' - ' + this.passWord);

    if (this.userName && this.passWord) {
      this.router.navigate(['/contacts']);
    }
  }
}
