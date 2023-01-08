import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() totalNormalUser = "";
  @Output() childUser = new EventEmitter<string>()
  onCreateUser(childValue:any){
    if(childValue){
      this.childUser.emit(childValue)
    }
    else{
      alert("Please enter user name")
    }
  }

  

}
