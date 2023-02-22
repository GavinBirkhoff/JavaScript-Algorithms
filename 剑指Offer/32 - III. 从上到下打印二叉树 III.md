请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const ans = []
    const stack = [root]
    while(stack.length){
        const len = stack.length
        ans.push([])
        for(let i = 0; i < len; i++){
            const curr = stack.shift()
            if(ans.length % 2 === 1){
                ans[ans.length - 1].push(curr.val)
            }else{
                ans[ans.length - 1].unshift(curr.val)
            }
            if(curr.left) stack.push(curr.left)
            if(curr.right) stack.push(curr.right)
        }
    }
    return ans
};
```