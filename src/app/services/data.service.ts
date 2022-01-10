import { Injectable } from '@angular/core';
import transactions from '../data.json'

interface transaction {
  type: string,
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  },
  company: string;
  email: string;
  phone: string;
  address: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  types = ["income","outcome","loan","investment"]

  //Список всех транзакций. Не пригодился
  getData() {
    return transactions.data
  }

  //Список транзакций, отфильтрованный по типу
  getFilteredData(type:number):transaction[] {
    return transactions.data.filter(element => element.type === this.types[type])
  }
  
  //Сумма всех транзакций
  getTransactionsCount() {
    return transactions.total
  }
  
  //Сумма транзакций по каждому типу
  getTransactionsTypeCount():number[] {
    const counts = [0, 0, 0, 0]
    for (let i = 0; i < transactions.data.length; i++) {
      switch (transactions.data[i].type) {
        case this.types[0]:
          counts[0]++
          break;
        case this.types[1]:
          counts[1]++
          break;
        case this.types[2]:
          counts[2]++
          break;
        case this.types[3]:
          counts[3]++
            break;
        default:
          break;
      }
    }
    return counts
  }
}
