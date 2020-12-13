import {Component, Inject, OnInit} from '@angular/core';
import {fromEvent, interval, Observable, Subscription} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {map, share} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {fetchuserAction} from "./auth/store/actions/fetchuser.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(@Inject(DOCUMENT) private document: Document, private store: Store<any>) {
    this.store.dispatch(fetchuserAction())
  }
  public ngOnInit(): void {


  }


}
