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
  valueMonth: number = 0;
  qtdSales: number = 0;
  valueTotal: number = 0;
  constructor(private popoverDelete: DeletePopoverService,
              private modalNewItemService: NewItemModalService,
              private getid: GetIdService,
              private databaseService: DatabaseFbService) { }

  ngOnInit() {
    this.getAll();
  }
  doRefresh(event) {
    this.getAll();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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
    console.log(this.itens);

    this.execute()
  }

  cauculatorQTD(itens) {
    this.qtdSales = itens.length;
  }

  async cauculatorSalesMonth() {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1;

    const result = await this.databaseService.getItensFilter();
    const r = result.filter(i => i.data === currentMonth);
    this.valueMonth = 0;
    r.forEach(element => {
      this.valueMonth = element.value + this.valueMonth;
    });

  }

  cauculatorTotal() {
    this.valueTotal = 0;
    this.itens.forEach(element => {
      this.valueTotal = element.value + this.valueTotal;
    });
  }

  async execute() {
    this.cauculatorQTD(this.itens);
    await this.cauculatorSalesMonth();
    this.cauculatorTotal();
  }


}
