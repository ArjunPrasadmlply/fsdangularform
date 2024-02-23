import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  registeredUser = {email:'',password:''};

OnClick(){
  console.log(this.registeredUser.email);
  console.log(this.registeredUser.password);
  alert("Submitted Succesfully");
}
}