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
                    const xingElementValue = interpretFourStars(digit);
                    xingElement.textContent = xingElementValue;
                    updateFourStarsElementStyle(xingElement, xingElementValue);
                    break;
                case 3:
                    var menElement = document.querySelector (".men");
                    const menElementValue = interpretEightGates(digit);
                    menElement.textContent = menElementValue;
                    updateEightGatesElementStyle(menElement, menElementValue);
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

function updateElementStyle(element, value, blackList, redList) {
    if (blackList.includes(value)) {
        element.style.color = "black";
    } else if (redList.includes(value)) {
        element.style.color = "red";
    }
}

//判斷八門吉凶，紅色為凶，黑色為吉
function updateEightGatesElementStyle(element, value) {
    const blackList = ["生", "景", "開", "休"];
    const redList = ["死", "傷", "驚","杜"];
    updateElementStyle(element, value, blackList, redList);
}

//判斷九星吉凶，紅色為凶，黑色為吉
function updateFourStarsElementStyle(element, value) {
    const fourStarsBlackList = ["輔", "心", "任", "英"];
    const fourStarsRedList = ["蓬", "沖", "芮", "柱"];
    updateElementStyle(element, value, fourStarsBlackList, fourStarsRedList);
}

//判斷神煞吉凶，紅色為凶，黑色為吉
function updateShenElementStyle(element, value) {
    const shenBlackList = ["值符", "太陰", "六合", "九地", "九天"];
    const shenRedList = ["白虎", "玄武", "騰蛇"];
    updateElementStyle(element, value, shenBlackList, shenRedList);
}

//九宮對應
function interpretDigit (digit) {
    const mapping = ["坤", "坎", "坤", "震", "巽", "坤", "乾", "兌", "艮", "離"];
    return mapping[digit];
}


function interpretShen(number, userInput, i) {
    const shenMapping = {
        1: "值符",
        2: "騰蛇",
        3: "太陰",
        4: "六合",
        5: "白虎",
        6: "玄武",
        7: "九地",
        8: "九天",
        9: "值符",
    };

    if (shenMapping.hasOwnProperty(number)) {
        return shenMapping[number];
    } else if (number === 0) {
        const previousDigit = parseInt(englishToNumber(userInput[i - 1]));
        return interpretShen(previousDigit, userInput, i - 1);
    } else {
        return "未知";
    }
}

// 第三個數字是四星的規則
function interpretFourStars (number) {
    const mapping = ["芮", "蓬", "芮", "沖", "輔", "芮", "心", "柱", "任", "英"];
    return mapping[number];
}

// 第四個數字是八門的規則
function interpretEightGates (number) {
    const mapping = ["死", "休", "死", "傷", "杜", "死", "開", "驚", "生", "景"];
    return mapping[number];
}

// 第五個數字是天干的規則
function interpretHeavenlyStems (number) {
    const mapping = ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬"];
    if (number === 0) {
        const nothingElement = document.querySelector(".nothing");
        nothingElement.textContent = "空";
        return "";
    }
    return mapping[number];
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