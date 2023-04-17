const letterCombinations = (digits) => {
    if (digits.length == 0) return [];
    const result = [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    
    /**
     * 
     * @param {*} curStr 已经合并的字符串
     * @param {*} nextIndex 下一组是第几组
     * @returns 
     */
    function getNext(curStr, nextIndex) {
        // 如果超出，则上一次已经执行完毕最后一组，结果添加到数组中
        if (nextIndex > digits.length - 1) {
            result.push(curStr)
            return 
        }

        // digits[nextIndex] 获取的是按键的哪个数字，即哪组，然后获取map中该组字符
        const strList = map[digits[nextIndex]]

        for (const str of strList) {
            // 先合并之前的字符， 然后遍历中继续往下执行， 每个分支组成“树”型
            getNext(curStr + str, nextIndex +1 )
        }
    }

    getNext('', 0)

    return result;
  };

  console.log(letterCombinations('23'));