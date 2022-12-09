function AmountChange(e, set) {
    let val = e.target.value;

    // if (new_char == "." || new_char == ",") {
    //     set(parseFloat(val).toFixed(2));
    //     return;
    // }
    // let arr = val.toString().split(".")
    // if (arr[1]) {
    //     if (arr[1].length == 1) val = arr[0] + "." + arr[1][0];
    //     else val = arr[0] + "." + arr[1][0] + arr[1][1];
    // } else val = arr[0]
    
    set(val);
}

function AddAmount(num, bal, set) {
    switch(num) {
        case "1/2":
            set(+parseFloat((bal / 2)).toFixed(2));
            break;
        case "2x":
            set(+parseFloat((bal * 2)).toFixed(2));
            break;
        case "max":
            //Insert All User Balance
            break;
        case "min":
            set(0.01);
            break;
        case "clear":
            set(0);
            break;
        default:
            set(+parseFloat((bal + num)).toFixed(2));
            break;
    }
}

export {
    AmountChange,
    AddAmount
}