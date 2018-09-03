import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//model 
import { userInterface } from '../model/user.model';

//services
import { UserService } from '../services/user.service';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = userInterface; 
  constructor(private userService: UserService, 
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {

    this.user = new userInterface('peter@klaven','cityslicka')
    
  }

  tryLogin(){
  
    this.userService.loginUser(this.user.email,this.user.password)
        .subscribe(resp=>{

          console.log(resp.token);
          this.customerService.setToken(resp.token);
          this.router.navigate(['/dashboard']);
          //this.router.navigateByUrl('/dashboard');
        },
        resp =>{
          console.log(resp.error.error);
        })
  }
}
