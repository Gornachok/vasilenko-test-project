import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tab = 0
  data = this.dataService.getFilteredData(0)

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ){ }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tab = params['tab']
      this.data = this.dataService.getFilteredData(this.tab)
    });
  }

}
