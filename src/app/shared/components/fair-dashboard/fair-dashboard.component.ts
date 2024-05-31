import { Component, OnInit, inject } from '@angular/core';
import { Ifair } from '../../models/fair.interface';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
  fairsArr ! : Array <Ifair>
  private _fairsService = inject(FairsService)
  constructor() { }

  ngOnInit(): void {
    this.fairsArr = this._fairsService.fetchAllFairs()
  }

}
