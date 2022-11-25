import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],
})
export class StarComponent implements OnChanges{
    @Input() rating:number=4;
    @Output()  ratingClicked:EventEmitter<string> =new EventEmitter<string>();

    cropWidth:number=75;
        
    ngOnChanges(): void {
        this.cropWidth=this.rating*75/5
    }

    OnClick():void{
      this.ratingClicked.emit('Rating Emitted to Parent -'+ this.rating)
    }
}