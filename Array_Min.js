let A1 = [3, 5, 1, 8, -3, 7, 8];
let A2 = [7, 12, 6, 9, 20, 56, 89];
let A3 = [];
let A4 = [0, 0, 0, 0, 0, 0];

function mininA(A) {
    let min = A[0];
    if (A.length == 0) {
        return -1;
    } else {
        for (let i = 1;i<A.length;i++) {
            if (A[i]< min){
                A[i] = min;
            }
        }
    }
    return min;
}

result1 = mininA(A1);
result2 = mininA(A2);
result3 = mininA(A3);
result4 = mininA(A4);
console.log(result1,result2,result3,result4);
