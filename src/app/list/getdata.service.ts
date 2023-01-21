import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { }
  url="http://localhost:5225/api/Student/Getstudents";
  getdata()
  {
    console.log("some data")
    return this.http.get(this.url)
  }
}
