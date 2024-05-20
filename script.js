//your code here
function majorityElement(arr){
    let ans = [];
    arr.forEach((elt,idx)=>{
        let obj = {};
        let bool = true;
        ans.forEach((object)=>{
            if(elt in object){
                object[elt]++;
                bool = false;
            }
        });
        if(bool){
            obj[elt] = 1;
            ans.push(obj);
        }
    });

    let fans;
    for(let i=0;i<ans.length;i++){
        let obj = ans[i];
        for(let key in obj){
            if(obj[key]>Math.floor(ans.length/2))
                fans = key;
        }
    }
    return fans;
}




