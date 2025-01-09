export interface linkedlist{
    listIndex: number
    isRoot: boolean
    id: number
    parentObj: linkedlist | null
    parentId: number | null
    label: any
    isLeaf: boolean
}