import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { linkedlistChildren, linkedListNoChild } from '../ImpClass/linkedList';

@Component({
  selector: 'app-recursive-revealer',
  imports: [NgIf, NgFor],
  templateUrl: './recursive-revealer.component.html',
  styleUrl: './recursive-revealer.component.scss'
})
export class RecursiveRevealerComponent {
  @Input() data!: linkedListNoChild[];
  onFlip(l: linkedListNoChild)
  {
    l.isDisplay = !l.isDisplay;
    console.log(l)
  }
}