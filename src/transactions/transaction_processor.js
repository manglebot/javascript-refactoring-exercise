// var txr = [];

function processtransactions(transactions) {

    // console.log("transactions = "+transactions);

    //const transactionResult = [];

    if(transactions === undefined) {
        throw new Error("Undefined collection of transactions")
    }

    // let txCount = {}

    // const txCount = transActions.reduce((acc, curr) => {
    //     const transaction = acc;
    //     txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    // }, {});

    // for(var i = 0; i < numberOftransactions.length; i++) {
    //     const transaction = transactions[i];
    //     txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    // }

    // ******** map below ******
    const transactionResult = new Map();

    for (const word of transactions) {
        if (transactionResult.has(word)) {
            transactionResult.set(word, transactionResult.get(word) + 1);
        } else {
            transactionResult.set(word, 1);
        }
      }

    // txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returnin g
    // Object.keys(txCount).forEach(function (key, index) {
    //     transactionResult[index] = `${key} ${txCount[key]}`;
    // });

    const outputArray = Array.from(transactionResult);

    outputArray.sort();

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

console.log("outputArray = "+outputArray);

    //   const finalOutput = outputArray.reduce(function(total, currentValue, currentIndex, arr){
       
    //     console.log("finalOutput total: "+total);
    //     console.log("finalOutput currentValue: "+currentValue);
    //     console.log("finalOutput currentIndex: "+currentIndex);
    //     console.log("finalOutput arr: "+arr);

    //    if(currentIndex % 2 === 0)
    //    {
    //     //console.log("currentIndex "+currentValue);
    //     const key = currentValue.split(',').join(' ');
    //     //const value = arr[currentIndex]+1;
    //     //console.log("key thingy = "+key);
    //     total.push(`${key}`);
    //    }

    //     return total;
    //   }, []);


    // THIS WORKS, BUT DOESN'T PUT THEM IN ORDER
    const finalOutput = outputArray.map(([key, value]) => {
        return `${key} ${value}`;
    });


    // //reduce or filter or both??
    // const output = Object.keys(outputArray).forEach(function (key, index) {
    //     transactionResult[index] = `${key} ${outputArray[index]}`;
    // });



    console.log("finalOutput is: "+finalOutput + "transactions is: "+transactions);

    return Array.from(finalOutput);
}

// function sortByAmountThenName(txCount) {
//     let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
//         return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
//     );

//     let sortedResults = {};
//     for(let objectKey of sortedKeys) {
//         sortedResults[objectKey] = txCount[objectKey];
//     }

//     return sortedResults;
// }


// function validatetransactions(transactions) {
//     if(transactions === undefined) {
//         return false;
//     } 

//     return true;
// }

module.exports = processtransactions;