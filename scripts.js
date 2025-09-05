const form = document.querySelector("form")
const numbersOutput = document.getElementById("numbersOutput")
const numberQuantity = document.getElementById("numberQuantity")
const numberMin = document.getElementById("numberMin")
const numberMax = document.getElementById("numberMax")
const numberRepeat = document.getElementById("numberRepeat")
const inputs = [numberQuantity,numberMin,numberMax]

const rng = {
    numbers: [],
    rerollOffset: 0,
    roll() {
        this.rerollOffset += this.numbers.length
        numbersOutput.textContent = ""
        for (i=0; i<numberQuantity.value + this.rerollOffset; i++) {
            const newNumber = Math.floor((Math.random() * (numberMax.value - numberMin.value + 0.998)) + numberMin.value - 0.499)
            if (this.numbers.includes(newNumber) && !numberRepeat.value) {
                i--
                continue
            } else if (numberMax.value - numberMin.value == this.numbers.length && !numberRepeat.value) {
                alert("Número máximo de numeros dentro do intervalo atingido, não é possível continuar esse sorteio.")
                break
            } else {
                this.numbers.push(newNumber)
            }
        }
        for  (i=0; i<numberQuantity.value; i++) {
            this.addNumber(this.numbers[numbers.length - (1 + i)])
        }
    },
    add(number) {
        const newNumberWrapper = document.createElement("li")
        const newNumber = document.createElement("p")
        newNumber.textContent = number
        newNumberWrapper.setAttribute("active", false)
        newNumberWrapper.append(newNumber)
        numbersOutput.append(newNumberWrapper)
        setTimeout(() => {
            newNumberWrapper.setAttribute("active", true)
        }, 3000)
    },
}

for (let input in inputs) {
    input.oninput = () => {
        let value = input.value.replace(/^[1-9][0-9]?$/g, "")
        input.value = value
    }
}

form.onsubmit = (event) => {
    event.preventDefault()
    if (numberMin >= numberMax) {
        alert("Valor mínimo deve ser menor que o valor máximo.")
    } else {
        rng.roll()
    }
}
