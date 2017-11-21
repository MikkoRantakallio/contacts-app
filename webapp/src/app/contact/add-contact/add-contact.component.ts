import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {DomSanitizer} from '@angular/platform-browser';
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
  mapPath: string;

  @ViewChild('map') mapFrameElement: ElementRef;

  @Input() contact: Contact;

  constructor(private router: Router, private contactService: ContactService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
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

    this.refreshMapFrame();
  }

  refreshMapFrame() {
    setTimeout(() => {
      const mapFrame = this.mapFrameElement.nativeElement;

      if (this.streetAddress != null) {
        mapFrame.src = 'https://maps.google.com/maps?q=' + this.streetAddress + ',' + this.city + '&output=embed';
      }
      else {
        mapFrame.src = 'https://maps.google.com/maps?q=lappeenranta&output=embed';
      }
    });
  }

  insertContact() {

    const mapFrame = this.mapFrameElement.nativeElement;

    if (this.firstName.length > 0 && this.lastName.length > 0) {
      let contact: Contact = new Contact(this.id, this.firstName, this.lastName, this.phoneNumber, this.streetAddress, this.city);

      if (this.id === 0) {
        this.contactService.insertContact(contact);
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.streetAddress = '';
        this.city = '';
        mapFrame.src = 'https://maps.google.com/maps?q=lappeenranta&output=embed';
      }
      else {

        this.contactService.updateContact(contact);
      }
    }
  }

  deleteContact(contact: Contact) {

    const mapFrame = this.mapFrameElement.nativeElement;

    this.contactService.deleteContact(this.contact);

    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.streetAddress = '';
    this.city = '';
    this.id = 0;
    mapFrame.src = 'https://maps.google.com/maps?q=lappeenranta&output=embed';
  }

  showContacts() {
    this.router.navigate(['/contacts']);
  }
}
