import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/Contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cnt: Contact) {
    this.service.formData = Object.assign({}, cnt);
  }
}
