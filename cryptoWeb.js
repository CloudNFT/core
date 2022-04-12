async function SHA256(salt,data,len){
    let buf=(t)=>{return new Uint8Array(t.split('').map(i=>i.charCodeAt(0)))};
    let hex=(b)=>{return Array.prototype.map.call(new Uint8Array(b),x=>('00'+x.toString(16)).slice(-2)).join('')}
    let key = await crypto.subtle.importKey('raw',buf(data),{name:'PBKDF2'}, false, ['deriveBits']) 
    let hash = '0x'+ hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:buf(salt),iterations:10,hash:"SHA-256"}, key,len*8))
    return hash
}
