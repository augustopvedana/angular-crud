import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit{
  
  product: Product = {
    name: ''
  }

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private router: Router) {}
  
  ngOnInit(): void {
    this.productService.read().subscribe((products: Product[]) => {
      this.products = products
      console.log(products);
    })
  }

}
