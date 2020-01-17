import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/Contact.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public service: ContactService, public toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cnt: Contact) {
    this.service.formData = Object.assign({}, cnt);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteContact(id).subscribe(res => { this.service.refreshList(); });
      this.toastr.warning('Deleted Successfully', 'Contact Registered');
    }
  }
}
