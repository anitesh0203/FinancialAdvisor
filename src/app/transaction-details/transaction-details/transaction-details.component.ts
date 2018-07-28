import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppModule } from '../../app.module';
import {MatSnackBar} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private location: Location, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  called() {
    alert ('The report has been sent to the NCA');
  }
}
