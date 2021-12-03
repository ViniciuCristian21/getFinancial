import { Component, OnInit } from '@angular/core';
import { NewItemModalService } from 'src/app/pages/dashboard/shared/new-item-modal.service';

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss'],
})
export class NewItemModalComponent implements OnInit {

  constructor(private modalNewItemService: NewItemModalService) { }

  ngOnInit() {}

  exitModal() {
    this.modalNewItemService.dismiss();
  }

}
