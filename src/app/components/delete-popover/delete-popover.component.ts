import { Component, OnInit } from '@angular/core';
import { GetIdService } from 'src/app/pages/dashboard/shared/get-id.service';

@Component({
  selector: 'app-delete-popover',
  templateUrl: './delete-popover.component.html',
  styleUrls: ['./delete-popover.component.scss'],
})
export class DeletePopoverComponent implements OnInit {
  uId: string
  constructor( private getid: GetIdService) { }

  ngOnInit() {}

  onDelete() {
    this.uId = this.getid.id;
    console.log("DELETADO!", this.uId)
  }

}
