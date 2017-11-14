import { Injectable } from '@angular/core';
import { BillLine } from './bill-line';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BillLineService {

  private billLinesUrl = "/api/bills/lines" ;
  
  constructor(private http: Http) { }

  getBillLinesById(bill_id: string): Promise<void | BillLine[]> {
    return this.http.get(this.billLinesUrl + '/' + bill_id)
               .toPromise()
               .then(response => response.json() as BillLine[])
               .catch(this.handleError);
  }

  updateBillLine(putBillLine: BillLine): Promise<void | BillLine> {
    var putUrl = this.billLinesUrl + '/' + putBillLine._id;
    return this.http.put(putUrl, putBillLine)
               .toPromise()
               .then(response => response.json() as BillLine)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
  }

}
