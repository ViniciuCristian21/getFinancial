import { DatabaseFbService } from './../../pages/dashboard/shared/database-fb.service';
import { Component, OnInit } from '@angular/core';
import { DeletePopoverService } from 'src/app/pages/dashboard/shared/delete-popover.service';
import { GetIdService } from 'src/app/pages/dashboard/shared/get-id.service';

@Component({
  selector: 'app-delete-popover',
  templateUrl: './delete-popover.component.html',
  styleUrls: ['./delete-popover.component.scss'],
})
export class DeletePopoverComponent implements OnInit {
  uId: string
  constructor( private getid: GetIdService,
               private popoverDelete: DeletePopoverService,
               private databaseService: DatabaseFbService) { }

  ngOnInit() {}

  async onDelete() {
    this.uId = this.getid.id;
    try {
      await this.databaseService.removeData(this.uId);
      this.popoverDelete.closePopover();
      console.log("DELETADO!", this.uId)
    } catch (err) {
      console.log(err);
    }
  }

}
