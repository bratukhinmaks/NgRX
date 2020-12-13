import {Component, Input, OnInit} from '@angular/core';
import {BackEndErrors} from "../../types";

@Component({
  selector: 'app-back-end-message',
  templateUrl: './back-end-message.component.html',
  styleUrls: ['./back-end-message.component.scss']
})
export class BackEndMessageComponent implements OnInit{
  @Input() errors: BackEndErrors
  public errorMessages: string[]

  public ngOnInit(): void{
    //this.initializeValue();
  }

  public initializeValue(): void {
    this.errorMessages = Object.keys(this.errorMessages).map((key) => {
      const message = this.errorMessages[key];
      return `${name} ${message}`
    })
  }
}
