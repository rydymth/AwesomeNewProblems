import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { linkedlist, linkedlistChildren } from './ImpClass/linkedList';
import {FormsModule} from '@angular/forms';
import { RecursiveRevealerComponent } from './recursive-revealer/recursive-revealer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RecursiveRevealerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'linkedlist';
  list: linkedlistChildren[] = []
  parentNodes: linkedlistChildren[] = []
  /*
  idSeed: number = 0
  listSeed: number = 0
  inp: string = "";
  */
  mainArr: linkedlist[] = [
    {
      _id: '6773df2a3b915745e46eaf96',
      id: 1,
      parentId: null,
      label: 'User Dashboard',
      routeLink: 'user-dashboard',
      icon: 'fa-solid fa-home',
      expanded: false,
      checkList: null,
      isBoth: false,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46easd',
      id: 9,
      parentId: 1,
      label: 'Dashboard',
      routeLink: 'dashboard',
      icon: 'fa-solid fa-home',
      expanded: false,
      checkList: null,
      isBoth: false,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf97',
      id: 2,
      parentId: null,
      label: 'Admin',
      routeLink: 'admin',
      icon: 'fa-solid fa-user',
      expanded: false,
      checkList: null,
      isBoth: false,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf98',
      id: 3,
      parentId: 2,
      label: 'User',
      routeLink: 'admin/user',
      icon: null,
      expanded: false,
      checkList: ['view', 'create', 'update', 'delete'],
      isBoth: false,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf99',
      id: 4,
      parentId: 2,
      label: 'Role',
      routeLink: 'admin/role',
      icon: null,
      expanded: false,
      checkList: ['view', 'create', 'update', 'delete'],
      isBoth: false,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf9a',
      id: 5,
      parentId: 2,
      label: 'Permission',
      routeLink: 'admin/permission',
      icon: null,
      expanded: false,
      checkList: null,
      isBoth: true,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf9b', // Updated unique id
      id: 6,
      parentId: 5,
      label: 'Role Right',
      routeLink: 'admin/role-right',
      icon: null,
      expanded: false,
      checkList: null,
      isBoth: true,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf33', // Updated unique id
      id: 7,
      parentId: 6,
      label: 'Role Based',
      routeLink: 'admin/role-right',
      icon: null,
      expanded: false,
      checkList: null,
      isBoth: true,
      __v: 0,
    },
    {
      _id: '6773df2a3b915745e46eaf32', // Updated unique id
      id: 8,
      parentId: 7,
      label: 'Role LOL',
      routeLink: 'admin/role-right',
      icon: null,
      expanded: false,
      checkList: ['view', 'create', 'update', 'delete'],
      isBoth: false,
      __v: 0,
    },
  ];

  reformat() {
    this.mainArr.map(obj => {
      this.list.push({
        ...obj, children: [], isRoot: false, isDisplay: false
      })
    })
  }
  
  getTreeStruct()
  {
    let addChild = (obj: linkedlistChildren) => {
      this.list.find(p => p.id === obj.parentId)?.children.push(obj);
    }
    this.list.map(obj => {
      if (obj.parentId === null)
        {
          obj.isRoot = true
          obj.isDisplay = true
        }
      else{
          addChild(obj)
      }
    })
  }
  

  ngOnInit(): void {
    this.reformat()
    this.getTreeStruct()
    this.parentNodes = this.list.filter(p => p.parentId === null)
    console.log(this.parentNodes)
  }
  
  /*
  
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
  */
}
