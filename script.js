let originalTable = document.querySelector("table").innerHTML;
document.querySelector("input").checked = false;

function showUclQualified(e){
    document.querySelector("table").innerHTML = originalTable;
    let rows = document.querySelectorAll("tbody tr")
    
    if(e.checked){   
        for(let i = 5; i < rows.length;i++){
            let row = rows[i];
            // I used remove() instead of "display none" to use sorting after filtering European Championship
            row.remove();
        }
    }
}

function sort(e){
    let rows = e.closest("table").querySelectorAll("tbody tr");
    let table_th = e.closest("table").querySelectorAll("th");

    if(e.classList.contains("asc_sort")){
        e.classList.remove("asc_sort");
        removeSortClasses(table_th);
        e.classList.add("desc_sort");
        bubbleSort(rows,e.cellIndex,"DESC");
    }else{
        e.classList.remove("desc_sort");
        removeSortClasses(table_th);
        e.classList.add("asc_sort");
        bubbleSort(rows,e.cellIndex,"ASC");
    }
}

function swapRows(row1, row2){
    let temp = row1.innerHTML;
    row1.innerHTML = row2.innerHTML;
    row2.innerHTML = temp;
}

function removeSortClasses(elements){
    elements.forEach((element) => {
        element.classList.remove("asc_sort")
        element.classList.remove("desc_sort")

    })
}

function bubbleSort(rows,cellIndex, type){
    
    for (let i = 0;i < rows.length - 1; i++) {
        let swapped = false;
        for (let i = 0;i < rows.length - 1; i++) {
            const row1_value = Number(rows[i].querySelector(`td:nth-child(${cellIndex + 1})`).innerText);
            const row2_value = Number(rows[i+1].querySelector(`td:nth-child(${cellIndex + 1})`).innerText);

            if(type == "ASC" && row2_value > row1_value){
                swapped = true;
                swapRows(rows[i],rows[i+1])
            }else if(type == "DESC" && row2_value < row1_value){
                swapped = true;
                swapRows(rows[i],rows[i+1])
            }
        }

        if(swapped == false){
            break;
        }
    }
}