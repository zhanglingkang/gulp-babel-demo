var gen = function* () {
    var f1 = yield "111";
    var f2 = yield "122";
    console.log(f1.toString());
    console.log(f2.toString());
}
var a = gen();
console.log(a.next("2"));
console.log(a.next("3"));
console.log(a.next("33"));