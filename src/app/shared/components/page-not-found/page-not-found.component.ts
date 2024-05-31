import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  errorMsg !:string;
  constructor(
    private _routes :ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this._routes.snapshot.data);
    this.errorMsg = this._routes.snapshot.data['msg']
    // this._routes.data
    //     .subscribe((res)=>{
    //       console.log(res);
          
    //     })
  }

}
