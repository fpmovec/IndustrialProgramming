class Ticket {
    constructor(obj) {
        this.id = obj.id
        this.description = obj.description
        this.createdAt = obj.createdAt
        this.seat = obj.seat
        this.departureDate = obj.departureDate
        this.arrivalDate = obj.arrivalDate
        this.departurePlace = obj.departurePlace
        this.arrivalPlace = obj.arrivalPlace
    }
}

class Handler {
    constructor(obj) {
        this.tickets = obj.slice()
    }

    hello() {
        console.log(this.tickets[0].id)
    }

    getItems(skip = 0, top = 1, filterConfig = null) {
        let items = [];
        let j = 0;
        for (let i = skip + 1; i < skip + top + 1; i++) {
            if (filterConfig == null) {
                items[i - skip - 1] = this.tickets[i];
            }
            else {

            }
        }
        return items;
    }

    getItemById(id) {
        let i = 0;
        while (this.tickets[i] != null) {
            if (this.tickets[i].id == id) {
                return this.tickets[i];
            }
        }
    }

    validateItem(obj) {
        if (obj.id != null && (typeof obj.id) == 'string' &&
            obj.description != null && (typeof obj.description) == 'string' &&
            obj.createdAt != null && (typeof obj.createdAt) == 'object')
            return true;
        else
            return false
    }

    addItem(obj) {
        if (!this.validateItem(obj))
            return false;

        this.tickets.push(obj);
        return true;
    }

    removeItem(id) {
      this.tickets.splice(id - 1, 1);
    }
}

const hand = new Handler([new Ticket({
    id: "1",
    description: "I'm description",
    createdAt: new Date(),
    seat: 11,
    departureDate: new Date(2023, 5, 7),
    arrivalDate: new Date(2023, 5, 8),
    departurePlace: "Minsk",
    arrivalPlace: "Moscow"
}), new Ticket({
    id: 2,
    description: "I'm description",
    createdAt: new Date(),
    seat: 11,
    departureDate: new Date(2023, 5, 9),
    arrivalDate: new Date(2023, 5, 10),
    departurePlace: "Moscow",
    arrivalPlace: "Saint Petersburg"
})])

//hand.hello();
console.log((hand.getItems(0, 1))[0].id);
console.log(hand.getItemById(1).seat);
console.log(hand.validateItem(hand.tickets[0]));
console.log(hand.addItem(new Ticket({
    id: 3,
    description: "I'm description",
    createdAt: new Date(),
    seat: 19,
    departureDate: new Date(2024, 5, 9),
    arrivalDate: new Date(2024, 5, 10),
    departurePlace: "Moscow",
    arrivalPlace: "Praha"
})));
hand.removeItem('3');
    console.log(hand.tickets[0].id);
    console.log(hand.tickets[1].id);
   console.log(hand.tickets[2].id);
