import { NewItemModalService } from './shared/new-item-modal.service';
import { DeletePopoverService } from './shared/delete-popover.service';
import { Component, OnInit } from '@angular/core';
import { GetIdService } from './shared/get-id.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private popoverDelete: DeletePopoverService,
              private modalNewItemService: NewItemModalService,
              private getid: GetIdService) { }

  ngOnInit() {
  }

  async onDelete(id: string) {
    this.getid.id = id;
    await this.popoverDelete.presentPopover();
  }

  async modalNewItem() {
    await this.modalNewItemService.presentQunatitiesProduct();
  }


}
