import { Injectable, inject } from '@angular/core';
import { Iproduct } from '../models/product.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr:Array<Iproduct> =[
    {
      pname:"samsung M31",
      pid:"123",
      pstatus:"In-Progress",
      canReturn:1
    },
    {
      pname:"samsung Tv",
      pid:"124",
      pstatus:"Dispatched",
      canReturn:1
    },
    {
      pname:"Iphone 15",
      pid:"125",
      pstatus:"Delivered",
      canReturn:1
    }
  ]
  private _sanckBarService = inject (SnackbarService)
  constructor() { }

  fechAllProducts():Array<Iproduct>{
    return this.productsArr;
  }
  fetchProduct(id :string): Iproduct{
    return this.productsArr.find(prod=>prod.pid===id) as Iproduct
  }
  addProduct(product:Iproduct){
    this.productsArr.unshift(product);
    this._sanckBarService.openSnackBar(`The new Product ${product.pname} is addedd successfully !!!`)
  }
  updateProduct(updateProduct : Iproduct){
    let getProductsId = this.productsArr.findIndex(prod=>prod.pid===updateProduct.pid);
    let oldProduct= this.productsArr[getProductsId]
    this.productsArr[getProductsId]=updateProduct;
    this._sanckBarService.openSnackBar(`The new Product ${oldProduct.pname}  is updated ${updateProduct.pname} successfully !!!`)
  }
  removeProduct(removeProd : Iproduct){
    let removeIndex =this.productsArr.findIndex(prod => prod.pid===removeProd.pid);
    this.productsArr.splice(removeIndex,1)
    this._sanckBarService.openSnackBar(`The  Product ${removeProd.pname} is remove successfully !!!`)
  }
}
