module.exports = function (athing, howDeep = 1) {
  if (!(athing instanceof Array)) {
    aThing = [ athing ];
  }
  
  if (howDeep > 1) {
    for (int i = 0; i < howDeep; i++) {
       aThing = [ athing ];
    }
  }
  
  return athing
}
