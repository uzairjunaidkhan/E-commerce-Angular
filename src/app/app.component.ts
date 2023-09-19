import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  isShow = false;
  value:String="";
  toggleDivs() {
    this.isShow = !this.isShow;
  }
  change(){
    console.log(this.value)
  }
}
