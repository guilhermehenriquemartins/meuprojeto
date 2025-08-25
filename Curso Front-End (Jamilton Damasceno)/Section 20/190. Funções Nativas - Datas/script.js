const data = new Date()

//console.log(data.toString())
//console.log(data.getMonth())
//console.log(data.getFullYear())
//console.log(`Date: ${data.getMonth() + 1}/${data.getDate()}/${data.getFullYear()}`)

//console.log(data.getHours())
//console.log(data.getMinutes())
//console.log(data.getMilliseconds())
//console.log(`Horário atual: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)

data.setHours(data.getHours() + 2)

console.log(`hora: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)