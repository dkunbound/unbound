import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { IVariant } from './IVariant';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  product: IProduct;
  variant: IVariant;
  imageUrl: string = "http://placehold.it/350x222";
  imagesfromGiphy: any;
  images: any[];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {
    alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s');
    const param = this._route.snapshot.paramMap.get('id');    
    if (param) {
      const id = +param;
      this.getProduct(id);      
    }    
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => {
        this.product = product;
        const param2 = this._route.snapshot.paramMap.get('id2'); 
        const id2 = +param2;
        this.getVariant(id2);
        this._productService.getProductGiphys(this.product.title).subscribe(
          img => {
            this.imagesfromGiphy = img; 
            this.images = this.imagesfromGiphy.data;
            console.log('ooooooooooo');
            console.log(this.images);    
            console.log('ooooooooooo');       
          },
          error => this.errorMessage = <any>error);
      },
      error => this.errorMessage = <any>error);
  }

  getVariant(id: number){
    this.variant = this.product.variants.find(p => p.id === id);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
