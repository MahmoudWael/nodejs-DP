class Greet {
    constructor() {}
    hello() {
        return 'Hello';
    }
    goodbye() {
        return 'See you later!';
    }
}

var myG = new Greet();
console.log(myG.hello());

function CreateProxy(subject) {
    // const proto = Object.getPrototypeOf(subject);

    function Proxy(subject) {
        this.subject = subject;
    }

    Proxy.prototype = Object.create(subject);

    Proxy.prototype.hello = function(){
        return this.subject.hello() + ' World!';
    };

    Proxy.prototype.goodbye = function(){
        return this.subject.goodbye.apply(this.subject, arguments);
    };

    return new Proxy(subject);
}


let Gr = CreateProxy(myG);

Gr.hello = function(){
    return 'hey!';
};
console.log(Gr.hello());
console.log(Gr.goodbye());

console.log(myG.hello());
// function CreateProxyLiteral(subject){
//     return{
//         hello: function(){
//             return subject.hello() + ' there!';
//         },
//         goodbye: function(){
//             return subject.goodbye.apply(subject, arguments)
//         }
//     };
// }

// let m = CreateProxyLiteral(myG);
// console.log(m.hello());
// console.log(m.goodbye());