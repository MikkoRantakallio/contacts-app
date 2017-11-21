import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private  localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
  }

  findContacts(): Observable<Contact[]> {

    return this.contactHttpService.get();
//    return this.localStorage.findContacts();
  }

  findContactById(id: number): Contact {

    return this.localStorage.findContactById(id);
  }

  updateContact(modifiedContact: Contact) {

    this.localStorage.updateContact(modifiedContact);
  }

  deleteContact(contact: Contact) {
    this.localStorage.deleteContact(contact);
  }

  insertContact(contact: Contact) {

//    this.localStorage.insertContact(contact);
    this.contactHttpService.create(contact);
  }

}

