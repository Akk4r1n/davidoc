export interface Documentation {
  id: number,
  // id of parent. If parentId is 0 then there is no parent
  parentId: number,
  // list of child Ids. If the list is empty then there are no childs
  childs: Documentation[],
  title: string, 
  // if content is empty then iterate only through the childs
  content: string
}
