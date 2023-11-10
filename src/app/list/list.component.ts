import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input("input") one: string[] = [];

  len: number = 0;

  ngOnInit(): void {

    console.log('oninit');
    if (this.one.length === this.len) {
      this.one.push('Hi Guys');
      this.len = 1;
    }


  }
  ngOnChanges(change: SimpleChanges): void {
    console.log("Onchange Called");
    console.log(change['one'].currentValue);
  }

  ngDoCheck(): void {


    if (this.one.length > this.len) {

      console.log(this.len);
      this.len++;

    }

  }


  ngOnDestroy(): void {
    console.log('Destroyed');

  }

  ngAfterContentInit(): void {
    console.log(" ngAfterContentInit");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");


  }

  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit");

  }








}
