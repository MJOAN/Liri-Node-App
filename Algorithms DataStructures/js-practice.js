ARRAY GROUPING

var groupable = [];
var keyPropertyName = 'key';
var valuePropertyName = 'value';

var keys = ["Lord", "Of", "The", "Rings"];
for (var i = 0; i < 1000; i++) {
    var keyIndex = Math.round(Math.random() * 4);
    var obj = {};

    obj[keyPropertyName] = keys[keyIndex];
    obj[valuePropertyName] = i;

    groupable.push(obj);
}

REDUCE

groupable.reduce(function(obj, item) {
    (obj[item[keyPropertyName]] = obj[item[keyPropertyName]] || []).push(item);
    return obj;
}, groups);

var result = Object.keys(groups) === 4;

OBJ MAPPING

for (var i = 0; i < groupable.length; i++) {
    const value = groupable[i];
    const key = value[keyPropertyName];

    if (!groups.hasOwnProperty(key)) {
        groups[key] = [];
    }

    groups[key].push(value[valuePropertyName]);
}
var result = Object.keys(groups) === 4;


CHECK OBJ KEY

var testObj = {
    a: 28,
    b: 82,
    c: "hello",
    d: 983,
    e: 'lara',
    o: "key",
    f: '82828',
    g: 8
};

var result;
if ("key" in testObj) {
    result = true;
}

var result;
if (testObj.key !== undefined) {
    result = true;
}

var result;
if (testObj.hasOwnProperty("key")) {
    result = true;
}


for (), map(), forEach()

var arr = 'giyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegcique'.split('');
var a;

for (var i = arr.length; i-- > 0;) a = arr[i];
arr.map(function(b) { a = b });
arr.forEach(function(b) { a = b });


function c(b) { a = b }
arr.map(c);

function c(b) { a = b }
arr.forEach(c);


ARRAY ITERATION

var array = new Array(1000);

for (var i = 0; i < array.length; i++) {
    array[i] = Math.random();
}

array.forEach(function(item) {
});

$(array).each(function(item) {
});

for (var i = 0; i < array.length; i++) {   
}

var len = array.length;
for (var i = 0; i < len; i++) {   
}

for (let item of array) {
}

array.reduce(function(acc, val) {  
})

var i = 0;
while(i++ < array.length) {
}


var i = 0;
var len = array.length;
while(i++ < len) {
}

array.map(function(item) {
    
})













