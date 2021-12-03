import { Injectable } from '@angular/core';
import { DeletePopoverComponent } from 'src/app/components/delete-popover/delete-popover.component';
import { PopoverController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DeletePopoverService {

  constructor(private popoverController: PopoverController) { }

    async presentPopover() {
      const popover = await this.popoverController.create({
        component: DeletePopoverComponent,
        cssClass: 'my-custom-class',
        // event: ev,
        translucent: true
      });
      await popover.present();

      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
}
