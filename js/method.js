const changeToTimestamp = (time) => {
    return new Date(time.createdAt).getTime()
}

/**
 * 
 * @param {Array} arr 
 * @return {Array} array sort by date
 */
const sortDate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (changeToTimestamp(arr[i]) < changeToTimestamp(arr[j])) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const getYear = (time) => {
    return new Date(time.createdAt).getFullYear()
}

/**
 * 
 * @param {Array} arr 
 * @return {Array} grouping array by year
 */
const groupByYear = (arr) => {
    let temp = {}
    for (let i = 0; i < arr.length; i++) {
        temp[getYear(arr[i])] = []
    }
    for (const key in temp) {
        for (let i = 0; i < arr.length; i++) {
            key == getYear(arr[i]) ? temp[key].push(arr[i]) : null
        }
    }
    return temp
}

/**
 * 
 * @param {Array} arr 
 * @return {Number} count
 */
const totalPoint = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].point
    }
    return count
}

/**
 * 
 * @param {object} data 
 * @returns
 */
const view = (data) => {
    for (const key in data) {
        console.log(`\nData >>> ${key}\n`)
        console.table(data[key])
    }
}

module.exports = {
    sortDate,
    groupByYear,
    view,
    totalPoint
}