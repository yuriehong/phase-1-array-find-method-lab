// code your solution here
function isW(element, index, array) {
    if(element.result == "W"){
        return element;
    }


  }
function superbowlWin(objects){
    const a =objects.find(isW);
    if (a == undefined){
        return a;
    }
    else{
        return a.year;
    }

}