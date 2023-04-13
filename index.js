const output = document.getElementById("output");

function calculate(event){
    
    let result = "";

    let denary = event.target.form[0].value
    const base = event.target.form[1].value

    if (denary < 0 || base <= 1){
        return;
    }

    let columns = 0;
    while (base**columns < denary){
        columns++;
    } 

    while (columns > 0) {
        let columnTotal = base**columns;
        let columnCurrent = base-1;
        let hasValue = false;
        while(columnCurrent > 0){
            if (columnTotal * columnCurrent <= denary){
                console.log
                hasValue = true;
                denary -= columnTotal * columnCurrent
                result += " " + columnCurrent
                break;
            }
            columnCurrent--;
        }
        if (!hasValue){
            result+= " 0"
        }
        columns--;
    }


    console.log(result);
    output.innerHTML = result;

}

