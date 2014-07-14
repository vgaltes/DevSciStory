
/*
 * 1.- Haciendo esto si hago node src/server/server.js me dice: define is not defined.
 * en cambio si hago karma start todo va bien
 */
/*define(function(){
    var server = function(){};

    server.prototype.start = function(){

    };

    return server;
});
*/


/*
 * 2.- Haciendo esto si hago node src/server/server.js node no se queja. Pero si hago
 * karma start me da un error: ReferenceError: Can't find variable: exports
 */
/*
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    exports.start = function(){}

});
*/

/*
 En el curso de James Shore lo que haciamos con nuestros ficheros de node era simplemente:
 exports.start = function() {blah, blah, blah}
 Y despues lo testeabamos con nodeUnit y todo iba bien.
 No entiendo pq parece ser que con karma no puedo definir mis modulos de la misma manera..

 */