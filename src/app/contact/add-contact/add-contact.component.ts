import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  id : number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;

  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit() {
  }

  insertContact() {

    if (this.firstName !== '' && this.lastName !== '') {
      let contact: Contact = new Contact(6, this.firstName, this.lastName, this.phoneNumber, this.streetAddress, this.city);
      this.contactService.insertContact(contact);

      this.firstName = '';
      this.lastName = '';
      this.phoneNumber='';
      this.streetAddress='';
      this.city='';

//      this.router.navigate(['/users']);
    }
  }

  showContacts() {
    this.router.navigate(['/contacts']);
  }
}
