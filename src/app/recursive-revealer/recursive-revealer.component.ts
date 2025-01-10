import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { linkedlistChildren } from '../ImpClass/linkedList';

@Component({
  selector: 'app-recursive-revealer',
  imports: [NgIf, NgFor],
  templateUrl: './recursive-revealer.component.html',
  styleUrl: './recursive-revealer.component.scss'
})
export class RecursiveRevealerComponent {
  @Input() data!: linkedlistChildren[];
  onFlip(l: linkedlistChildren)
  {
    l.isDisplay = !l.isDisplay;
    console.log(l)
  }
}