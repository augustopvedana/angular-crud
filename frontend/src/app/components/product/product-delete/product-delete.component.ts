import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit{
  product: Product = {
    name: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
     ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(String(id)).subscribe((product) => {
        this.product = product;
      })
  }

  deleteProduct(): void {
  this.productService.delete(Number(this.product.id)).subscribe(() => {
    this.productService.showMessage('Product Deleted');
    this.router.navigate(['/products']);
  })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
