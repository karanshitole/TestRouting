import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Iproduct } from 'src/app/shared/models/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isInEditMode : boolean = false;
  productId !:string;
  productObj !:Iproduct;
  productForm !:FormGroup;
private _route = inject(ActivatedRoute);
private _router = inject(Router)
private _productService = inject(ProductsService);
private _uuid =inject(UuidService)
  constructor() { }
 
  ngOnInit(): void {
    this.createProductForm();
  this.productId= this._route.snapshot.params['productId'];
 // console.log(this._route.snapshot.queryParams);
  this._route.queryParams
      .subscribe((res:Params)=>{
        console.log(res);
        if(res['candit']==='0'){
          this.productForm.disable()
        }else{
          this.productForm.enable()
        }
      })
  if(this.productId){
    this.isInEditMode =false;
    this.productObj=this._productService.fetchProduct(this.productId);
    this.productForm.patchValue(this.productObj)
   
  }else{
  this.isInEditMode=true;
  }
  }
  createProductForm(){
    this.productForm = new FormGroup({
      pname : new FormControl(null,[Validators.required]),
      pstatus : new FormControl(null,[Validators.required]),
      canRetrun : new FormControl(0,[Validators.required])

    })
  }
  onProductAdd(){
   if(this.productForm.valid){
    let newProduct:Iproduct ={...this.productForm.value, pid: this._uuid.generateUuid()};
    console.log(newProduct);
    this ._productService.addProduct(newProduct);
    this._router.navigate(['/products'])
   }
  }
  onProductUpdate(){
    if(this.productForm.valid){
      let updateObj : Iproduct= {...this.productForm.value, pid:this.productId  }
      console.log(updateObj);
      this._productService.updateProduct(updateObj)
    }
  }
}
