alert("Sizda hozir random sonlar chiqishni boshlaydi")
let randomNum =Math.floor(Math.random()*100)

alert(`Random son ${randomNum} chiqdi`)

let firstNum = randomNum*2
let secodNum = randomNum/2
let third = randomNum%3

alert (
`
Random ${randomNum} son edi:
${randomNum} ni 2 ga kopaytirganimizda ${firstNum}:
${randomNum} ni 2 ga bolganimizda ${secodNum}:
${randomNum} ni 3 ga bolganimizda ${third} qoldiq chiqadi:
`
)