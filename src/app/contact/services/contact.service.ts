import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'Matti', 'Heikkinen', '050-8887776', 'Kaarikatu 6', 'Espoo'),
      new Contact(2, 'Iivo', 'Niskanen', '040-1115556', 'Kuusitie 4', 'Kuopio'),
      new Contact(3, 'Sami', 'Jauhojärvi', '050-1230981', 'Maisterinkatu 10', 'Lahti'),
      new Contact(4, 'Ville', 'Nousiainen', '050-5645222', 'Sompakatu 10', 'Rovaniemi'),
      new Contact(4, 'Martti', 'Jylhä', '040-7761212', 'Latutie 11', 'Tornio')
    ];
  }

  findContacts(): Contact[] {
    return this.contacts;
  }

  findContactById(id: string): Contact {

    return null;
  }

  saveContact(contact: Contact) {

  }

  deleteContact(contact: Contact) {

  }
}
