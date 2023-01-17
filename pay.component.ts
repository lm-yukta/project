import { Component } from '@angular/core';
import { __values } from 'tslib';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  PaymentForm = new FormGroup(
    {
  
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      //password:new FormControl(''),
      creditno:new FormControl('',[Validators.required,Validators.pattern('[1-9 ]*'),Validators.maxLength(16)]),
      nameoncard:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      cvv:new FormControl('',[Validators.required,Validators.maxLength(3)]),
      zipcode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern('[1-9 ]*')]),
      
    })
  
    get email(){return this.PaymentForm.get('email')};
    get name(){return this.PaymentForm.get('name')};
    get creditno(){return this.PaymentForm.get('creditno')};
    get nameoncard(){return this.PaymentForm.get('nameoncard')};
    get cvv(){return this.PaymentForm.get('cvv')};
    get zipcode(){return this.PaymentForm.get('zipcode')};
  
    getName1()
    {
      alert('Payment is Confirm')
    }
  
  
  payment()
  {
    console.warn(this.PaymentForm.value)
  }
  
}
