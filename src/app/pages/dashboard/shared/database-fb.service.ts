import { Itens } from './itens';
import { Injectable } from '@angular/core';
import { db } from 'src/environments/environment';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseFbService {
  userCollectionRef = collection(db, "Itens");
  result: any = [];
  resultFilter: any = [];
  constructor() { }

  async getAll() {
    const snap = await getDocs(this.userCollectionRef);

    this.result = [];
    snap.docs.map(doc => {
      this.result.push({
        id: doc.id,
        name: doc.data().name,
        value: doc.data().value,
        data: doc.data().date.dateFull
      })
    });


    return this.result;
  }

  async getItensFilter() {
    const itens = await getDocs(this.userCollectionRef);
    this.resultFilter = [];
    itens.docs.map(doc => {
      this.resultFilter.push({
        id: doc.id,
        name: doc.data().name,
        value: doc.data().value,
        data: doc.data().date.onlyMonth
      })
    })

    return this.resultFilter;
  }

  async InsertData(Itens: Itens) {

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const currentMonth = day + '/' + month + '/' + year;


    const {name, value} = Itens;
    await addDoc(this.userCollectionRef, {
      name: name,
      value: value,
      date: {
        onlyMonth: month,
        dateFull: currentMonth
      }
    });
  }

  async removeData(id: string) {
    const originDoc = doc(this.userCollectionRef, id);

    await deleteDoc(originDoc);
  }
}
