class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.isRegistered = false
    }
    register() {
        this.isRegistered = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "What do you want to do?\n" +
                                "1- Register your pet\n" +
                                "2- Print your pet's list\n" +
                                "3- Exit")
    }
    return chosenOption
}

function createPet() {
    let petName = prompt("What is your pet's name?")
    let age = prompt("What is your pet's age in months?")
    let pet = new Pet(petName, age)
    return pet
}

function printPetList(pets) {
    let petList = ""
    pets.forEach((pet, index) => {
       petList += (index + 1) + "- " + pet.name + " (" + pet.age + " months)\n"
    })
    alert(petList)
}

let registeredPets = []

let chosenOption
while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let petToAdd = createPet()
            petToAdd.register() 
            registeredPets.push(petToAdd)
            break
        case "2":
            printPetList(registeredPets)
            break
    }
}