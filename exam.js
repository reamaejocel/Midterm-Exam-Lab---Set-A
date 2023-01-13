const add = require ('./add')
const write = require ('./write')
const read = require ('./read')
const present = require('./present')
const employee = require('./emp')


const data = process.argv

if (data [2]=="add"){
    const note = {
        employee: data[3],
        role: data [4],
        department: data [5],
    }
    var oldNote = read ()
    add(note, oldNote)
}
if (data[2]=="read"){
    present(read())
}
if (data[2]=="employee"){
    employee(read())
}
