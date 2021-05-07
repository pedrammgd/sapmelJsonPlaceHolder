import { rendererTypeName } from '@angular/compiler';
import { Component, ElementRef, OnInit, Directive } from '@angular/core';

@Component({
  selector: '[app-cooomm]',
  templateUrl: './cooomm.component.html',
  styleUrls: ['./cooomm.component.css']
})


export class CooommComponent implements OnInit {

  constructor(private elements : ElementRef) {

    elements.nativeElement.style.color = 'red';
   }

  ngOnInit(): void {
  }

}
