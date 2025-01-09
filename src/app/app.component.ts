import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { linkedlist } from './ImpClass/linkedList';
import {FormsModule} from '@angular/forms';

class seed{
  idSeed: number = 0
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkedlist';
  idSeed: number = 0
  listSeed: number = 0
  inp: string = "";
  
  rootLists: linkedlist[][] = [];
  
  createNewListArr(label: string)
  {
  this.rootLists.push(
    [
      {
        listIndex: this.listSeed++,
        id: this.idSeed++,
        isRoot: true,
        isLeaf: true,
        label: label,
        parentId: null,
        parentObj: null
      }
    ])
  }
  
  createNewSubListArr(index: number, list: linkedlist, label: string)
  {
    console.log(list)
    const tmpList: linkedlist | undefined = this.rootLists[index].find(ls => ls == list)
    if (!tmpList) return "Ahh shit"
    tmpList.isLeaf = false;
    this.rootLists[index].push(
      {
        listIndex: index,
        id: this.idSeed++,
        isRoot: false,
        isLeaf: true,
        label: label,
        parentId: tmpList.id,
        parentObj: tmpList
      }
    )
    return "Success"
  }
  
  deleteList(index: number, list: linkedlist)
  {
    console.log(list)
    let ind: number = this.rootLists[index].indexOf(list)
    this.rootLists[index].splice(ind, this.rootLists[index].length - 1)
    console.log(this.rootLists)
  }
}
