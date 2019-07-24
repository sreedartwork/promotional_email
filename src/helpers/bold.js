module.exports = function(options){
    var bolder = '<strong>' + options.fn(this) + '</stong>'
    return bolder;
}