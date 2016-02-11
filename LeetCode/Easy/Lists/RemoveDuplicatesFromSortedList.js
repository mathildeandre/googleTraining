

function ListNodes(val, next) {
    this.val = val;
    this.next = next;
}

var deleteDuplicates = function(head){
    var temp = head;
    var result = temp;
    while(temp != null){
        if(temp.next != null && temp.next.val == temp.val ){
            temp.next = temp.next.next;
        }else{
            temp = temp.next;
        }
    }
    return result;
}

var main = function(){
    var listNode = new ListNodes(1, new ListNodes(1, new ListNodes(1)));
    var result = deleteDuplicates(listNode);
    while (result != null) {
        console.log(result.val);
        result = result.next;
    }
}