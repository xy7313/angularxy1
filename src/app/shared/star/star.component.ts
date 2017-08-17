import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges {

  @Input() rating : number;
  //send to parent
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter();
  
  starWidth : number;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.starWidth = this.rating * 86/5;
    console.log("onchanges:"+ this.rating);
  }

  ratingFn() : void {
    this.ratingClicked.emit('Rating value = ' + this.rating);
  }

}
