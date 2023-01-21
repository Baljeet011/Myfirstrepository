import { Component } from '@angular/core';
import {GetdataService} from './getdata.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private list:GetdataService){}
  students:any
  ngoninit() : void{
  this.list.getdata()
}
    // getdata()
    // {
    //   this.list.getdata().subscribe((data)=>{
    //     console.log(data)
    //     this.students=data
    //   })
    // }
  

}
