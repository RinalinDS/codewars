function getMiddle(s) {
    let len = s.length;
    if (len % 2 == 0) {
        return s[len/2 -1] + "" + s[len/2];
    } else if (s.length == 1) {
        return s;
    } else {
        return s[Math.floor(len/ 2)];


    }
}