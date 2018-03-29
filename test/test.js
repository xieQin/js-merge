var x = {
    a: 1,
    b: 2
}

var y = {
    a: 3
}

var d = {}

Object.keys(x).forEach(function(key) {
    console.log(x[key])
})