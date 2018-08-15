import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public recoverForm : FormGroup;
  public whiteTheme : boolean;
  public remember : boolean;
  public recover : boolean;
  public hover : boolean;
  

  constructor(private router : Router, private fb : FormBuilder ) { 
    this.recover = false;
    this.hover = false;
    this.whiteTheme = true;    
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.recoverForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
   let username = localStorage.getItem("username");
   let password = localStorage.getItem("password");
   if(username && password){
     this.remember = true;
     this.loginForm.controls.username.patchValue(username);
     this.loginForm.controls.password.patchValue(password);
   }else{
     this.remember = false
   }
  }

  handleRemember(){
    if(this.remember){
      localStorage.setItem("username", this.loginForm.controls.username.value);
      localStorage.setItem("password", this.loginForm.controls.password.value);
    }else{
      localStorage.clear();
    }
  }

  handleRecover(){
    this.recover = !this.recover
    this.recoverForm.reset();
  }

  login(){
    // TODO service login
    if(this.loginForm.valid){
      this.handleRemember();
      this.router.navigateByUrl('/quosy');
    }
  }
  sendRecoverMessage(){
    //TODO send service
    if(this.recoverForm.valid){
      this.handleRecover();
    }
  }

  triggerAnim(){
    this.hover=  !this.hover;
  }
}
