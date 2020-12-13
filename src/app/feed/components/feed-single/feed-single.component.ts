import { Component, Input, OnInit } from '@angular/core';
import { ArticleInterface } from "../../../shared/types";

@Component({
  selector: 'app-feed-single',
  templateUrl: './feed-single.component.html',
  styleUrls: ['./feed-single.component.scss']
})
export class FeedSingleComponent implements OnInit {
  @Input() feed: ArticleInterface;
  constructor() { }

  ngOnInit() {
  }

}
