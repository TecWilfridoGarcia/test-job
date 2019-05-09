import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-airbus',
  templateUrl: './airbus.component.html',
  styleUrls: ['./airbus.component.scss']
})
export class AirbusComponent implements OnInit {

models:['Airbus-A340','Airbus-A340','Airbus-A340'];

  constructor(private service: UserService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form! = null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      email: '',
      age: '',
      date:'',
      phone: ''  ,
      model:''    
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('users').add(data);
    else
      this.firestore.doc('users/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Registro exitoso, buen viaje!');
  }
}
