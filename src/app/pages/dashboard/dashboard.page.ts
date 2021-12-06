import { NewItemModalService } from './shared/new-item-modal.service';
import { DeletePopoverService } from './shared/delete-popover.service';
import { Component, OnInit } from '@angular/core';
import { GetIdService } from './shared/get-id.service';
import { DatabaseFbService } from './shared/database-fb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  itens: any = [];
  constructor(private popoverDelete: DeletePopoverService,
              private modalNewItemService: NewItemModalService,
              private getid: GetIdService,
              private databaseService: DatabaseFbService) { }

  ngOnInit() {
    this.getAll();
  }

  async onDelete(id: string) {
    this.getid.id = id;
    await this.popoverDelete.presentPopover();
  }

  async modalNewItem() {
    await this.modalNewItemService.presentQunatitiesProduct();
  }

  async getAll() {
    this.itens = await this.databaseService.getAll();
    console.log(this.itens)
  }


}
