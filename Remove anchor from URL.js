
function removeUrlAnchor(url){
    return  url.indexOf('#') > 0 ? url.slice(0, (url.indexOf('#'))) : url
}



function removeUrlAnchor1(url){
    return  url.split('#')[0]
}

console.log(removeUrlAnchor1("www.codewars.com?page#1"));
