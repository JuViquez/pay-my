import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  getUsers(): Promise<void | User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }


  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
  }
}
