import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewItemModalComponent } from 'src/app/components/new-item-modal/new-item-modal.component';

@Injectable({
  providedIn: 'root'
})
export class NewItemModalService {

  constructor(private modalController: ModalController) { }

  async presentQunatitiesProduct() {
    const modal = await this.modalController.create({
      component: NewItemModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
