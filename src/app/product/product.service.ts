import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap, throwError,Subscription } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productUrl ='api/products/products.json'

    constructor(private http: HttpClient){}           

    getProducts(): Observable<IProduct[]> {
        
        return  this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data=>console.log('All:',JSON.stringify(data))) ,
          catchError(this.handleError) 
        ) ;     
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = 'Error occured'
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}