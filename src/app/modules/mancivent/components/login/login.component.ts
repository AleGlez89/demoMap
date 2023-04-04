import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManciventService } from 'src/app/modules/data-transfer/services/manciventServices/mancivent.service';
import { defaultErrorSms, usersI } from 'src/app/modules/data-transfer/services/resourcesServices/models/users.interface';
import { sessionDataNames } from 'src/app/modules/data-transfer/services/sessionStoreServices/models/session-data-names.interface';
import { SessionStoreService } from 'src/app/modules/data-transfer/services/sessionStoreServices/session-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private allUsers: usersI[] = [];
  public controlShowErrorLogin = false;
  public errorLoginSMS = defaultErrorSms;

  public credentialByLogin = this.fb.group({
    email: ['',
      [
        Validators.required,
      ],
    ],
    password: ['',
      [
        Validators.required,
      ],
    ]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sessionStore: SessionStoreService,
    private serviceMancivent: ManciventService) 
  {}
  ngOnInit(): void {
    this.getUsers();
  }

  public checkLogin(){
    const searchUser = this.allUsers
    .filter((user:usersI)=>{
      return user.email === this.credentialByLogin.get('email')?.value &&
      user.password ===  this.credentialByLogin.get('password')?.value
    })

    this.sessionStore.setSessionStoreValue(sessionDataNames.typeUser,searchUser[0].role)

    searchUser.length 
    ? this.router.navigate(['/dashboard'])
    : this.controlShowErrorLogin = !this.controlShowErrorLogin
  }
  private getUsers(): void{
    this.serviceMancivent.getUsers()
    .subscribe((users: usersI[])=>{
      this.allUsers = users;
    });
  }
}