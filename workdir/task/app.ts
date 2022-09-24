const taskOne = (passengers: number, shuffle: number) => {

    interface passengers {
        name: string;
        location: string;
    }
    let reservation: passengers[] = [], boarded: passengers[] = [], counter = 0, inputInfo: passengers[] = [], locations = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"]

    for (let indexOfPass = 0, indexOfLocation = 0; indexOfPass < passengers; indexOfLocation++, indexOfPass++) {

        let obj: passengers = {
            name: `passenger${indexOfPass + 1}`,
            location: locations[indexOfLocation]
        }

        inputInfo.push(obj)
        if (indexOfLocation > 3) {
            indexOfLocation = -1
        }
    }

    if (inputInfo.length % 5 !== 0) {
        reservation = inputInfo.splice(-(inputInfo.length % 5))

    }

    while (inputInfo.length > 0) {

        if (inputInfo.length > 50) {
            boarded = inputInfo.splice(0, 50)
        } else {
            boarded = inputInfo.splice(0)
        }
        if (shuffle === 0 && inputInfo.length) {
            reservation = inputInfo.splice(0)
        }
        counter++;
        shuffle--;
    }
    return {
        boarded: boarded,
        reservation: reservation,
        count: counter
    }


}
export default taskOne;