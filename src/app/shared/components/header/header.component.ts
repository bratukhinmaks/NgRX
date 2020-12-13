import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isLoggedInSelector} from "../../../auth/store/selelctore";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogged$ = this.store.pipe(select(isLoggedInSelector));
  public user$ = this.store.pipe(select(currentUserSelector));

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
