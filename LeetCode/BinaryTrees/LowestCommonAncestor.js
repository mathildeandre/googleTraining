/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 */
var lowestCommonAcestorRec = function(root, p, q){

}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var pile = new Array();
    var stackNodes = new Array();
    var foundBoth = false;
    var foundP = false;
    var foundQ = false;

    var temp = root;
    pile.push(root);
    while(! foundBoth && pile.length != 0){
        if(! (foundP || foundQ) && ! (temp.right == null && temp.left == null)){
            stackNodes.push(temp);
        }
        if(temp.right != null){
            pile.push(temp.right);
        }
        if(temp.left != null){
            pile.push(temp.left);
        }
        if(compare(temp, p)){
            foundP = true;
        }
        if(compare(temp, q)){
            foundQ = true;
        }
        foundBoth = foundP && foundQ;

        while(stackNodes.length >= pile.length){
            stackNodes.pop();
        }
        temp = pile.pop();
    }
    return stackNodes.pop().val;
};


var compare = function (p, q){
    if(p == null && q==null){
        return true;
    }
    else if(p!=null && q !=null && p.val == q.val){
        return (compare(p.right, q.right) && compare(p.left, q.left));
    }else{
        return false;
    }
};

/* Definition for a binary tree node. */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

var main = function(){
    var tree = new TreeNode(6,
        new TreeNode(2,
            new TreeNode(3,null, null),
            new TreeNode(4,
                new TreeNode(10, null, null),
                new TreeNode(5, null, null))),
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)));

    var tree2 = new TreeNode(6,
        new TreeNode(2,
            new TreeNode(3,null, null),
            new TreeNode(4,
                new TreeNode(3, null, null),
                new TreeNode(5, null, null))),
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)));

    //alert(findMin(tree));
    //alert(compare(tree, tree2));

    alert(lowestCommonAncestor(tree, new TreeNode(3,null, null),
        new TreeNode(5, null, null) ));
}



