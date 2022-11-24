import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import {
  Subject,
  takeUntil,
} from "rxjs";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})

export class ProductListComponent implements OnInit, OnDestroy {
  private erroMessgae = "";
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  ShowImage: boolean = true;
  private _listFilter: string = "";
  private readonly destroy$ = new Subject();
  filterproducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products = products;
          this.filterproducts = this.products;
        },
        error: (err) => {
          this.erroMessgae = err;
        },
      });
    this.listFilter = "";
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("Setter.", value);
    this.filterproducts = this.performFilter(value);
  }

  performFilter(filterby: string): IProduct[] {
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterby)
    );
  }

  OnRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  toggleImage(): void {
    this.ShowImage = !this.ShowImage;
  }
}
