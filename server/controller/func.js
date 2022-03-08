function Auth(f1,f2,f3){
    if(!f1){
        return false
    }
    else if(!f2){
        return false
    }
    else if(!f3){
        return false
    }
    else{
        return true
    }
}

module.exports = Auth