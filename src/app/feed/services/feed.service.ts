import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Feed} from "../../shared/types";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
  }

  public getFeed(url): Observable<Feed> {
  return this.http.get<Feed>(`${environment.Url}/${url}`)
  }
}
