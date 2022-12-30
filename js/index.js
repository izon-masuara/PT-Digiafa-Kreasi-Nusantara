'use strict'

const {
    sortDate,
    groupByYear,
    view,
    totalPoint
} = require('./method')
const certificates = require('./data')

// Answer 1
const dataSortByDate = sortDate(certificates)
// OR using build in function
const sortingDataByTime = certificates.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

console.table(dataSortByDate)

// Answer 2
const groupingDataByYear = groupByYear(certificates)
view(groupingDataByYear)

// Answer 3
const point = totalPoint(certificates)
console.log(`\n\n Total point = ${point}\n\n`)

// Answer 4
/*
    Baiknya, data tersebut hanya mengandung "publisherId" yang kemudian
    id tersebut akan bereferensi ke "publisherName" atau bisa hanya mengandung
    "publisherName" yang unique

    contoh di bawah ini yang hanya mengandung publisherId

    const certificates = [
        {
            id: 1,
            name: "Finalis Lomba Coding",
            type: "kejuaraan",
            publisherId: "P001",
            point: 10,
            createdAt: '2014-10-05T14:48:00.000Z',
        },
        {
            id: 2,
            name: "Finalis Lomba Makan Kerupuk",
            type: "kejuaraan",
            publisherId: "P002",
            point: 20,
            createdAt: '2010-10-05T14:48:00.000Z',
        }
    ]

    const publisher = [
        {
            publisherId: "P001",
            publisherName: "EO Hack & Coding"
        },
        {
            publisherId: "P002",
            publisherName: "Panitia 17an Desa Juara"
        }
    ]
*/