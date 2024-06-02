function interpretNumber () {
    var nqimenElement = document.querySelector (".qimen-container");
    nqimenElement.style.display = "flex";


    var nothingElement = document.querySelector (".nothing");
    nothingElement.textContent = "";
    // 獲取輸入的六位數字
    var userInput = document.getElementById ("userInput").value;

    // 確保輸入為六位數
    if (userInput.length === 6) {

        for (var i = 0; i < 6; i++) {
            var digit = parseInt (englishToNumber (userInput [i]));
            switch (i) {
                case 0:
                    var positionElement = document.querySelector (".position");
                    positionElement.textContent = interpretDigit (digit);
                    break;
                case 1:
                    var shenElement = document.querySelector (".shen");
                    const shenElementValue = interpretShen(digit, userInput, i);
                    shenElement.textContent = shenElementValue;
                    updateShenElementStyle(shenElement, shenElementValue);
                    break;
                case 2:
                    var xingElement = document.querySelector (".xing");
                    xingElement.textContent = interpretFourStars (digit);
                    break;
                case 3:
                    var menElement = document.querySelector (".men");
                    menElement.textContent = interpretEightGates (digit);
                    break;
                case 4:
                    var tianElement = document.querySelector (".tian-gan");
                    tianElement.textContent = interpretHeavenlyStems (digit);
                    break;
                case 5:
                    var diElement = document.querySelector (".di-gan");
                    diElement.textContent = interpretHeavenlyStems (digit);
                    break;
            }
        }

        
    } else {
        alert ("請輸入正確的六位數字！");
    }
}

function updateShenElementStyle(element, value) {
    const blackList = ["值符", "太陰", "六合", "九地", "九天"];
    const redList = ["白虎", "玄武", "騰蛇"];
    
    if (blackList.includes(value)) {
        element.style.color = "black";
    } else if (redList.includes(value)) {
        element.style.color = "red";
    }
}
// 解讀單個數字
function interpretDigit (digit) {
    switch (digit) {
        case 1:
            return "坎";
        case 2:
            return "坤";
        case 3:
            return "震";
        case 4:
            return "巽";
        case 5:
            return "坤";
        case 6:
            return "乾";
        case 7:
            return "兌";
        case 8:
            return "艮";
        case 9:
            return "離";
        case 0:
            return "坤";
    }
}


function interpretShen (number,userInput,i) {
    switch (number) {
        case 1:
            return "值符";
        case 2:
            return "騰蛇";
        case 3:
            return "太陰";
        case 4:
            return "六合";
        case 5:
            return "白虎";
        case 6:
            return "玄武";
        case 7:
            return "九地";
        case 8:
            return "九天";
        case 9:
            return "值符";
        case 0:
            return interpretShen (parseInt (englishToNumber (userInput [i-1])),userInput,i-1);
        default:
            return "未知";
    }
}

// 第三個數字是四星的規則
function interpretFourStars (number) {
    switch (number) {
        case 1:
            return "天蓬";
        case 2:
            return "天芮";
        case 3:
            return "天沖";
        case 4:
            return "天輔";
        case 5:
            return "天芮";
        case 6:
            return "天心";
        case 7:
            return "天柱";
        case 8:
            return "天任";
        case 9:
            return "天英";
        case 0:
            return "天芮";
        default:
            return "未知";
    }
}

// 第四個數字是八門的規則
function interpretEightGates (number) {
    switch (number) {
        case 1:
            return "休";
        case 2:
            return "死";
        case 3:
            return "傷";
        case 4:
            return "杜";
        case 5:
            return "死";
        case 6:
            return "開";
        case 7:
            return "驚";
        case 8:
            return "生";
        case 9:
            return "景";
        case 0:
            return "死";
        default:
            return "未知";
    }
}

// 第五個數字是天干的規則
function interpretHeavenlyStems (number) {
    switch (number) {
        case 1:
            return "甲";
        case 2:
            return "乙";
        case 3:
            return "丙";
        case 4:
            return "丁";
        case 5:
            return "戊";
        case 6:
            return "己";
        case 7:
            return "庚";
        case 8:
            return "辛";
        case 9:
            return "壬";
        case 0:
            var nothingElement = document.querySelector (".nothing");
            nothingElement.textContent = "空";
            return "";
        default:
            return "";
    }
}
function englishToNumber (char) {
    // 如果输入是数字，则直接返回该数字
    if (!isNaN (char)) {
        return parseInt (char);
    }

    // 将输入字符转为小写，以匹配时不区分大小写
    var lowerCaseChar = char.toLowerCase ();

    // 定义映射关系
    var mapping = {
        'a': 1, 'j': 1, 's': 1,
        'b': 2, 'k': 2, 't': 2,
        'c': 3, 'l': 3, 'u': 3,
        'd': 4, 'm': 4, 'v': 4,
        'e': 5, 'n': 5, 'w': 5,
        'f': 6, 'o': 6, 'x': 6,
        'g': 7, 'p': 7, 'y': 7,
        'h': 8, 'q': 8, 'z': 8,
        'i': 9, 'r': 9
    };

    // 返回对应的映射值，如果没有匹配到则返回 undefined
    return mapping [lowerCaseChar];
}