import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  localStorageKey: string;

  constructor() {
    this.contacts = [
      new Contact(1, 'Matti', 'Heikkinen', '050-8887776', 'Kaarikatu 6', 'Espoo'),
      new Contact(2, 'Iivo', 'Niskanen', '040-1115556', 'Kuusitie 4', 'Kuopio'),
      new Contact(3, 'Sami', 'Jauhojärvi', '050-1230981', 'Maisterinkatu 10', 'Lahti'),
      new Contact(4, 'Ville', 'Nousiainen', '050-5645222', 'Sompakatu 10', 'Rovaniemi'),
      new Contact(5, 'Martti', 'Jylhä', '040-7761212', 'Latutie 11', 'Tornio')
    ];

    this.localStorageKey = 'ca-contacts';
    this.initializeLocalStorage();
  }

  findContacts(): Contact[] {
//    return this.contacts;
    return this.readLocalStorageContacts();
  }

  findContactById(id: string): Contact {

    return null;
  }

  saveContact(contact: Contact) {

    const contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  private readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  private writeLocalStorageContacts(contacts) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }

  deleteContact(contact: Contact) {

  }

  insertContact(contact: Contact) {

    this.contacts.push(contact);
  }
}
