

import { Component } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,

} from '@angular/material';
/**
 * @title Basic table
 */
@Component({
  selector: 'material-table',
  styleUrls: ['material-table.component.css'],
  templateUrl: 'material-table.component.html',
})
export class MaterialTableComponent {
  value = 10;
  displayedColumns = ['accountId', 'date', 'totalVolume', 'totalValue', 'maximumAmount', 'currency', 'tradeId', 'quantity'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  accountId: string;
  date: string;
  totalVolume: string;
  totalValue: string;
  maximumAmount: string;
  currency: string;
  tradeId: string;
  quantity: string;
}

const ELEMENT_DATA: Element[] = [
  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '1800',
    maximumAmount: '890',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '1800',
    maximumAmount: '890',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '1800',
    maximumAmount: '890',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'USD',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '2000',
    maximumAmount: '890',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },
  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '2000',
    maximumAmount: '890',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },  {
    accountId: '11ABCDRF',
    date: '07-21-2017',
    totalVolume: '2',
    totalValue: '2000',
    maximumAmount: '890',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  },  {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  }, {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  }, {
    accountId: '11ABCDRF',
    date: '07-22-2017',
    totalVolume: '4',
    totalValue: '2000',
    maximumAmount: '400',
    currency: 'EU',
    tradeId: 'ALnYC8cjL8KpbnaNaVXlYx9szaUULp',
    quantity: '7037',
  }
];

