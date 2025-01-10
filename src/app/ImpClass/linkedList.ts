export interface linkedlist{
      _id: string,
      id: number,
      parentId: number | null,
      label: string,
      routeLink: string,
      icon: string | null,
      expanded: boolean,
      checkList: null | string[],
      isBoth: boolean,
      __v: number,
}

export interface linkedlistChildren{
      _id: string,
      id: number,
      parentId: number | null,
      label: string,
      routeLink: string,
      icon: string | null,
      expanded: boolean,
      checkList: null | string[],
      isBoth: boolean,
      __v: number,
      isRoot: boolean,
      children: linkedlistChildren[]
      isDisplay: boolean
}