import { Component, Input, OnInit , ViewEncapsulation } from '@angular/core';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import { User } from '../../users/user';
import { Business } from '../../business/business';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BillLine } from '../../bill_lines/bill-line';
import { BillLineService } from '../../bill_lines/bill-line.service';

@Component({
  selector: 'current-bill',
  templateUrl: './current-bill.component.html',
  styleUrls: ['./current-bill.component.css'],
  providers: [BillService, BillLineService]
})
export class CurrentBillComponent implements OnInit {

  user_id: string;
  business_id: string;
  private sub: any;
  billLines: BillLine[];
  currentBill: Bill;

  constructor(private billService: BillService,
              private router: Router,
              private route: ActivatedRoute,
              private billLineService: BillLineService
            ) { }

  ngOnInit() {
    function pad(num, size) {
          var s = num+"";
          while (s.length < size) s = "0" + s;
          return s;
      }

    this.sub = this.route.params.subscribe(params => {
      this.business_id = params['business_id'];
      this.user_id = params['user_id'];
    })
    var today = new Date();
    var datetime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var newBill = new Bill();
    newBill.date = datetime;
    newBill.userd_id = this.user_id;
    newBill.business_id = this.business_id;
    newBill.total = 0;
    newBill.pin = pad(Math.floor(Math.random() * 9999).toString(),4);
    newBill.state = 'pending';

    this.billService.createBill(newBill).then((bill: Bill) => {
     this.currentBill = bill;
    }) ;


  }

  refreshLines(){
    this.billLineService.getBillLinesById(this.currentBill._id).then((billLines: BillLine[]) => {
     this.billLines = billLines;
     console.log(this.billLines);
    }) ;
  }



}
