import { Injectable } from '@angular/core';
import { Business } from './business';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BusinessService {

  private businessUrl = 'api/business';
  constructor(private http: Http) { }

  getBusiness(): Promise<void | Business[]> {
    return this.http.get(this.businessUrl)
               .toPromise()
               .then(response => response.json() as Business[])
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
  }

}
