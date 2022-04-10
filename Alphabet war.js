// function alphabetWar(fight) {
//     let leftSideMatch = fight.match(/[w,p,b,s]/g)
//     if (leftSideMatch) leftSideMatch = leftSideMatch.map((m) => {
//         switch (m) {
//             case 'w':
//                 return 4
//             case 'p':
//                 return 3
//             case 'b':
//                 return 2
//             case 's':
//                 return 1
//         }
//     }).reduce((acc, el) => acc + el, 0)
//     let rightSideMatch = fight.match(/[m,q,d,z]/g)
//     if (rightSideMatch) rightSideMatch = rightSideMatch.map((m) => {
//         switch (m) {
//             case 'm':
//                 return 4
//             case 'q':
//                 return 3
//             case 'd':
//                 return 2
//             case 'z':
//                 return 1
//         }
//     }).reduce((acc, el) => acc + el, 0)
//     if (rightSideMatch > leftSideMatch) {
//         return 'Right side wins!'
//     } else if (rightSideMatch < leftSideMatch) {
//         return 'Left side wins!'
//     } else {
//         return 'Let\'s fight again!'
//     }
// }
//
// console.log(alphabetWar('z'));

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}