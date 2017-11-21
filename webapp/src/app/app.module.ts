import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {ContactLoginComponent} from './contact/contact-login/contact-login.component';
import {LoginService} from './contact/services/login.service';
import {ContactLogoutComponent} from './contact/contact-logout/contact-logout.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ContactLoginComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: AddContactComponent
  },
  {
    path: 'logout',
    component: ContactLogoutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactListItemComponent,
    ContactListComponent,
    AddContactComponent,
    ContactAddressPipe,
    ContactLoginComponent,
    ContactLogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    ContactLocalStorageService,
    ContactService,
    ContactHttpService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
