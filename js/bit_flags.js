const BIR = 1; // 1
const IKI = 1 << 1; // 2
const UC = 1 << 2; // 4
const DORT = 1 << 3; // 8
const BES = 1 << 4; // 16

console.log("BIR  :", BIR);
console.log("IKI  :", IKI);
console.log("UC   :", UC);
console.log("DORT :", DORT);
console.log("BES  :", BES);

let flags = 0;

function is_set(v,b) {
	return (v & b ? "Evet" : "Hayır");
}


// set BIR
flags |= BIR;

console.log("flags: ", flags);


console.log("BIR is_set: ", is_set(flags,BIR));

console.log("IKI is_set: ", is_set(flags,IKI));

// set IKI
flags |= IKI;

console.log("IKI is_set: ", is_set(flags,IKI));

console.log("UC is_set: ", is_set(flags,UC));

// set UC
flags |= UC;

console.log("UC is_set: ", is_set(flags,UC));

console.log("DORT is_set: ", is_set(flags,DORT));

// set DORT
flags |= DORT;

console.log("DORT is_set: ", is_set(flags,DORT));

console.log("BES is_set: ", is_set(flags,BES));

// set BES
flags |= BES;

console.log("BES is_set: ", is_set(flags,BES));

console.log("clear bit");
flags &= ~BES;

console.log("BES is_set: ", is_set(flags,BES));

console.log("toggle bit");
flags ^= BES;

console.log("BES is_set: ", is_set(flags,BES));


