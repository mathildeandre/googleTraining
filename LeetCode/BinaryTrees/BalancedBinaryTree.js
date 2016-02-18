

function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
};

var isBalanced = function(root){
    if(root == null || (root.left== null && root.right==null)){
        return true;
    }else if(root.left == null || root.right == null){
        var temp = root.left==null ? root.right : root.left;
        if(temp.right!=null || temp.left != null){
            return false;
        }else{
            return true;
        }
    }else{
        return isBalanced(root.left) && isBalanced(root.right);
    }
}

/*
    f(1)
       f(2) && f(4) =



 */

var main = function () {
    var tree = new TreeNode(1, new
        TreeNode(2,
            new TreeNode(2,
                       new TreeNode(3, null,
                            new TreeNode(3, null, null)), null), null), null);


    alert(isBalanced(tree));
}
