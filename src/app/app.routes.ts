
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details/transaction-details.component';


const appRoutes: Routes = [
  { path: 'transactionDetails/:id', component: TransactionDetailsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
