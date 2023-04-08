let con = document.createElement('div');
let calc = document.createElement('div');
let outPut = document.createElement('input');
let nums = document.createElement('div');

let cl = document.createElement('button');
cl.innerHTML = 'C';
cl.style.cssText = "cursor: pointer; padding: 15px 20px; order: -2; grid-column: span 2; background-color: rgb(70 147 157); border:none;"


let del = document.createElement('button');
del.innerHTML = 'del';
del.style.cssText = "cursor: pointer; padding: 15px 20px; order: -1; grid-column: span 2; background-color: red; border:none;"


let zero = document.createElement('button');
zero.innerHTML = '0';
zero.style.cursor = 'pointer';

let dot = document.createElement('button');
dot.innerHTML = '.';
dot.style.cursor = 'pointer';

let equal = document.createElement('button');
equal.innerHTML = '=';
equal.style.cssText = "background-color:#3f51b5; cursor:pointer; border:none; padding:15px 20px;";


let multi = document.createElement('button');
multi.innerHTML = '*';

let add = document.createElement('button');
add.innerHTML = '+';

let mins = document.createElement('button');
mins.innerHTML = '-';

let dive = document.createElement('button');
dive.innerHTML = '/';


multi.style.cssText = 'padding:15px 20px; cursor:pointer;';
add.style.cssText = 'padding:15px 20px; cursor:pointer;';
mins.style.cssText = 'padding:15px 20px; cursor:pointer;';
dive.style.cssText = 'padding:15px 20px; cursor:pointer;';


for (let i = 0; i < 9; i++) {
    let number = document.createElement('button');
    number.innerHTML = i + 1;
    number.innerHTML === '4'? nums.appendChild(dive) : true;
    number.innerHTML === '7'? nums.appendChild(multi) : true;
    nums.appendChild(number);
    number.style.cursor = 'pointer';
    number.onclick = function (e) {
        outPut.value += e.target.innerHTML;
    };
};


document.body.appendChild(con);
con.appendChild(calc);
calc.appendChild(outPut);
calc.appendChild(nums);
nums.appendChild(add);
nums.appendChild(mins);
nums.appendChild(zero);
nums.appendChild(dot);
nums.appendChild(equal);
nums.appendChild(cl);
nums.appendChild(del);

outPut.placeholder = '0';

// style
con.style.cssText = "";
calc.style.cssText = "width:300px; min-height:300px; background-color:#eee; margin:100px auto;";
outPut.style.cssText = "width: 80%; border: none; margin: 15px 10px; padding: 20px; border-radius: 10px; outline:none; font-family: monospace;";
nums.style.cssText = " display: grid; grid-template-columns: repeat(4,1fr); gap:2px; margin:10px; padding:10px; font-family: monospace;";


equal.onclick = function done() {
    try {
        outPut.value = eval(outPut.value);
        
    } catch (error) {
        outPut.value = 'error';
    };
};

cl.addEventListener ("click",() => {outPut.value = ""});
del.addEventListener ("click",() => {outPut.value = outPut.value.slice(0,-1)});

multi.addEventListener ("click",() => {outPut.value += "*"});
dive.addEventListener ("click",() => {outPut.value += "/"});
mins.addEventListener ("click",() => {outPut.value += "-"});
add.addEventListener ("click",() => {outPut.value += "+"});

zero.addEventListener ("click",() => {outPut.value += "0"});
dot.addEventListener ("click",() => {outPut.value += "."});