import { Itens } from './itens';
import { Injectable } from '@angular/core';
import { db } from 'src/environments/environment';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, QuerySnapshot } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseFbService {
  userCollectionRef = collection(db, "Itens");
  result: any = [];
  constructor() { }

  async getAll() {
    const snap = await getDocs(this.userCollectionRef);

    // snap.forEach((doc => {
    //   this.result.push({
    //     id: doc.id,
    //     name: doc.data().name,
    //     value: doc.data().value,
    //     data: doc.data().data
    //   })
    // }))
    this.result = [];
    snap.docs.map(doc => {
      this.result.push({
        id: doc.id,
        name: doc.data().name,
        value: doc.data().value,
        data: doc.data().data
      })
    });


    return this.result;
  }
}
