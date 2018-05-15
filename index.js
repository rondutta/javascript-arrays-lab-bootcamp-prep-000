var kittens = ["Milo","Otis","Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
}

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
}

var appendKitten = function(name){
  var newarr = [...kittens,name];
  return newarr;
}

var prependKitten = function(name){
  var newarr = [name,...kittens];
  return newarr;
}