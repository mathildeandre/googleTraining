

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, tab) {
    if(n == 1){
        return true;
    }

    tab.push(n);
    var s = ""+n;
    var result = 0;
    for(var i=0; i< s.length; i++){
        result += parseInt(s[i])*parseInt(s[i]);
    }

    if(contains(tab, result)){
        return false;
    }else{
        return (isHappy(result, tab));
    }
};

var contains = function(tab, elem){
    for(var i=0; i<=tab.length; i++){
        if(tab[i] == elem){
            return true;
        }
    }
    return false;
}

var main = function(){
    var n = 1;
    var tab = [];
    alert(isHappy(n, tab));

}
