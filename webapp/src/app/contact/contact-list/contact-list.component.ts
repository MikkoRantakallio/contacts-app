import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;

  @Output() contactSelected: EventEmitter<Contact>;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
  }

  ngOnInit() {

    this.contacts = this.contactService.findContacts();
  }

  onContactSelect(contact: Contact) {
    console.log(contact);
    this.router.navigate(['contacts', contact.id]);
  }

  showAddContact() {
    this.router.navigate(['/add-contact']);
  }


}