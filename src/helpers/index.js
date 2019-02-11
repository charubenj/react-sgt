
export function randomString(length=8){    //passing default parament in es6

   const characters='aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'
    let output='';
    for( let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random() * characters.length);

        output+= characters[randomIndex];
    }
    return output;

}