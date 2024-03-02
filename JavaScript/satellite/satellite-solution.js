export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 && inorder.length === 0) return {};

  if (preorder.length !== inorder.length) {
    throw new Error("traversals must have the same length");
  }

  if (preorder.length !== new Set(preorder).size) {
    throw new Error("traversals must contain unique items");
  }

  if (preorder.length !== new Set(inorder).size) {
    throw new Error("traversals must contain unique items");
  }

  if (preorder.length !== new Set([...preorder, ...inorder]).size) {
    throw new Error("traversals must have the same elements");
  }

  let root = preorder[0];
  let rootIndex = inorder.indexOf(root);

  let leftInorder = inorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1);

  let leftPreorder = preorder.filter((item) => leftInorder.includes(item));
  let rightPreorder = preorder.filter((item) => rightInorder.includes(item));

  let left = treeFromTraversals(leftPreorder, leftInorder);
  let right = treeFromTraversals(rightPreorder, rightInorder);

  return { value: root, left, right };
};
