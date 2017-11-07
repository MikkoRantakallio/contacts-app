import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;

  contact: Contact;

  constructor(private router: Router, private contactService: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    if (this.id > 0) {
      this.contact = this.contactService.findContactById(this.id);

      this.firstName = this.contact.firstName;
      this.lastName = this.contact.lastName;
      this.phoneNumber = this.contact.phoneNumber;
      this.streetAddress = this.contact.streetAddress;
      this.city = this.contact.city;
    }
  }

  insertContact() {

    if (this.firstName.length > 0 && this.lastName.length > 0) {
      let contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phoneNumber, this.streetAddress, this.city);

      if (this.id === 0) {
        this.contactService.insertContact(contact);
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.streetAddress = '';
        this.city = '';
      }
      else{

        this.contactService.updateContact(contact);
      }
    }
  }

  deleteContact(contact: Contact) {

    this.contactService.deleteContact(this.contact);

    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.streetAddress = '';
    this.city = '';
    this.id = 0;
  }

  showContacts() {
    this.router.navigate(['/contacts']);
  }
}
