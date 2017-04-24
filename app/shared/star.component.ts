import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector: 'star-rating',
    templateUrl: "app/shared/star.component.html",
    styleUrls: ["app/shared/star.component.css"],
   
})

export class StarComponent implements OnChanges {
    starWidth: number 
    @Input() rating: number 
    // calling the click event from parent container (component)
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void {
        console.log("---- on change---")
        this.starWidth = (this.rating*86)/5
    }
    onClick(): void{
        console.log("---rating--clicked---")
        this.ratingClicked.emit(` Rating clicked ${this.rating} !`);
    }
}