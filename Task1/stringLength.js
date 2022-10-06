function stringLength(string){
    if( string.length < 1 ||  string.length > 10) {
     throw new Error ("String should have a length between 1 and 10");
    }
    return string.length;
 }
module.exports = stringLength
