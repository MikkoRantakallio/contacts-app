import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'contacts',
    component: AppComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactListItemComponent,
    ContactListComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
