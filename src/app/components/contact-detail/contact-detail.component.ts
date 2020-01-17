import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {



  constructor(public service: ContactService, public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.items = {
      id: null,
      name: '',
      email: '',
      phone: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postContact(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Contact Registered');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.updateContact(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully', 'Contact Registered');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
