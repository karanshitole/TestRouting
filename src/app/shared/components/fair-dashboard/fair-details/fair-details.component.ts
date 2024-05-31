import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifair } from 'src/app/shared/models/fair.interface';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  fairId !:string;
  fairObj !: Ifair
  private _route = inject(ActivatedRoute)
  private _fairsService = inject(FairsService)
  constructor() { }

  ngOnInit(): void {
    this._route.params
        .subscribe((params:Params)=>{
          console.log(params);
          this.fairId = params['fairId'];
          if(this.fairId){
            this.fairObj = this._fairsService.fetchFair(this.fairId)
          }
        })
  }

}
