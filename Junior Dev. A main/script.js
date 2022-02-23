const choose = document.querySelector('#convert-list'),
        input = document.querySelector('.input'),
        btn = document.querySelector('.button'),
        result = document.querySelector('.result');

function convert_operation(arg, op, units) {
    console.log(input.value)
    if (input.value) {
            if (+input.value) {
                if (op == 'multi') {
                    result.value = input.value * arg; 
                    result.value += units
                }    
                if (op == 'div') {
                    result.value = input.value / arg; 
                    result.value += units
                }                
            }
            else if (input.value == 0) {
                    result.value = input.value; 
            }
            else {
                result.value = 'Введите число';
            }
    }
    else {
            result.innerHTML = 'Заполните поле';
    }

}



function convertValue() {
    switch(choose.selectedIndex) {
        case 0:
            convert_operation(1000, 'multi', " гр");
            break
        case 1:
            convert_operation(1000, 'div', ' т');
            break
        case 2:
            convert_operation(1000, 'multi', ' кг');
            break
        case 3:
            convert_operation(1000, 'div', ' кг');
            break
        case 4:
            convert_operation(10, 'div', ' дм');
            break
        case 5:
            convert_operation(100, 'div', ' м');
            break
        case 6:
            convert_operation(10, 'multi', ' см');
            break
        case 7:
            convert_operation(100, 'multi', ' см');
            break
        case 8:
            convert_operation(1000, 'multi', ' м');
            break
        case 9:
            convert_operation(1000, 'div', ' км');
            break
    }
}



btn.onclick = function (evt) {
    evt.preventDefault();
    convertValue()
}
        
