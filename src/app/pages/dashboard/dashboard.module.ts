import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NewItemModalComponent } from 'src/app/components/new-item-modal/new-item-modal.component';
import { DeletePopoverComponent } from 'src/app/components/delete-popover/delete-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, NewItemModalComponent, DeletePopoverComponent]
})
export class DashboardPageModule {}
