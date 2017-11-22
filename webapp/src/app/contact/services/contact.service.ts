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
  }

  findContactById(id: number): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  updateContact(modifiedContact: Contact) {

    return this.contactHttpService.update(modifiedContact);
  }

  deleteContact(contact: Contact) {

    return this.contactHttpService.delete(contact.id);
  }

  insertContact(contact: Contact) {
    this.contactHttpService.create(contact);
  }
}

