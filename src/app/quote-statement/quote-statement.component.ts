import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-statement',
  templateUrl: './quote-statement.component.html',
  styleUrls: ['./quote-statement.component.css']
})
export class QuoteStatementComponent implements OnInit {

  @Input() quote: Quotes;
  @Output () isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
