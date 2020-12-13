import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercistentService {
  constructor(@Inject(Window) private window: Window) {
  }
  public set(key: string, data: any):void {
    try {
      this.window.localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      console.log("Error detected while setting", err)
    }
  }

  public get(key: string): any{
    try {
      return JSON.parse(this.window.localStorage.getItem(key))
    } catch (err) {
      console.log("Error detected", err)
      return null
    }
  }

}
