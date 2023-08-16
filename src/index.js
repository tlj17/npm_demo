const debounce = (fn,t)=>{
    let timer = null
    return function() {
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(()=>{
            fn()
        },t)
    }
}

const throttle =(fn,t)=>{
    let timer
    return function(){
        if(!timer) {
            timer = setTimeout(function(){
                fn()
                timer = null
            },t)
        }
        }
}

module.exports={
    debounce,
    throttle
}