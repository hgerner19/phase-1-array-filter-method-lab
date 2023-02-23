// Code your solution here
function findMatching(array,word){
    let temp = [];
    for(const user of array){
        if(user === word || user === word.toLowerCase()){
            temp.push(user);
        }
    }
    return temp;
}
function fuzzyMatch(array,word){
    let temp =[];
    for(const user of array){
        if(user.startsWith(word)){
            temp.push(user);
        }
    }
    return temp;
}
function matchName(array,word){
    let temp = [];
    for(const user of array){
        if(user.name === word || user.hometown === word){
            temp.push(user);
        }
    }
    return temp;
}