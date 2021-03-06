import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
