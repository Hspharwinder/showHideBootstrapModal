import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild('modal', { static: false }) modal: ElementRef;
  title = 'hideShowPopInsteadJquery';
 
  showPop: boolean = false;

  openModel() {
    this.modal.nativeElement.className = 'd-show';
  }
  closeModel() {
    this.modal.nativeElement.className = 'd-none';
  }
  show(){
    this.showPop = true;
  }
  hide(){
    this.showPop = false;
  }
}
