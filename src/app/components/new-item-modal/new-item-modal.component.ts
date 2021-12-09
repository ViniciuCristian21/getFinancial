import { DatabaseFbService } from './../../pages/dashboard/shared/database-fb.service';
import { Itens } from './../../pages/dashboard/shared/itens';
import { Component, OnInit } from '@angular/core';
import { NewItemModalService } from 'src/app/pages/dashboard/shared/new-item-modal.service';

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss'],
})
export class NewItemModalComponent implements OnInit {
  itens: Itens;
  constructor(private modalNewItemService: NewItemModalService,
              private databaseService: DatabaseFbService) { }

  ngOnInit() {
    this.itens = new Itens();
  }

  exitModal() {
    this.modalNewItemService.dismiss();
  }

  async saveItens() {
    if(this.itens.name === undefined || this.itens.value === undefined) {
      return
    }
    try {
      this.databaseService.InsertData(this.itens);
      this.exitModal();
    } catch (err) {
      console.log(err);
    }
  }

}
