
export function randomString(length=8){    //passing default parament in es6

   const characters='aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'
    let output='';
    for( let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random() * characters.length);

        output+= characters[randomIndex];
    }
    return output;

}

export function formatPostData(data){
    const urlParams=new URLSearchParams();//URLSearchParams() build query string
    for(let [key , value] of Object.entries(data)){   //object.entries takes all the key value pair and input into an array of array
        urlParams.append(key,value);

    }
    return urlParams;
}