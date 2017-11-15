import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import { User } from '../../users/user'
import { Business } from '../../business/business'

@Component({
  selector: 'current-bill',
  templateUrl: './current-bill.component.html',
  styleUrls: ['./current-bill.component.css'],
  providers: [BillService]
})
export class CurrentBillComponent{

  @Input()
  user: User;
  
  @Input()
  business: Business;
  
  currentBill: Bill;

  constructor(private billService: BillService) { }


}
