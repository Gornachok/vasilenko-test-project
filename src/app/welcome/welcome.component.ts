import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  transactionsCount = this.dataService.getTransactionsCount()
  transactionsTypeCount = this.dataService.getTransactionsTypeCount()

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

}
