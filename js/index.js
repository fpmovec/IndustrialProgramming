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

    getItems(skip = 0, top = 1, filterConfig = null) {
        let items = [];
        let j = 0;
        let k = 0;
        for (let i = skip; i < skip + top; i++) {
            if (filterConfig == null) {
                items[i - skip] = this.tickets[i];
            }
            else {

            }
        }
        items.sort(function (a, b) {
            if (a.departureDate > b.departureDate) {
                return 1;
            }
            if (a.departureDate < b.departureDate) {
                return -1;
            }
            return 0;
        })
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

    addItems(objects) {
        for (let i = 0; i < objects.length; i++) {
            if (!this.validateItem(objects[i]))
                return false;
            this.tickets.push(objects[i]);
        }
        return true;

    }

    editItem(id, obj) {
        let item = this.getItemById(id);
        if (obj.description != null)
            item.description = obj.description;
        if (obj.createdAt != null)
            item.createdAt = obj.createdAt;
        if (obj.seat != null)
            item.seat = obj.seat;
        if (obj.departureDate != null)
            item.departureDate = obj.departureDate;
        if (obj.arrivalDate != null)
            item.arrivalDate = obj.arrivalDate;
        if (obj.description != null)
            item.departurePlace = obj.departurePlace;
        if (obj.description != null)
            item.arrivalPlace = obj.arrivalPlace;

        this.tickets[id - 1] = item;
    }

    removeItem(id) {
        this.tickets.splice(id - 1, 1);
    }
}

Ticket.prototype.toString = function ticketToString(){
    return `id: ${this.id}
    description: ${this.description}
    created at ${this.createdAt}
    seat: ${this.seat}
    departure date: ${this.departureDate}
    arrival date: ${this.arrivalDate}
    departure place: ${this.departurePlace}
    arrival place: ${this.arrivalPlace}
    -----------------------------------`
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
console.log((hand.getItems(0, 2))[0].toString());
console.log(hand.getItemById(1).toString());
console.log(hand.validateItem(hand.tickets[0]));
console.log(hand.addItem(new Ticket({
    id: "3",
    description: "I'm description",
    createdAt: new Date(),
    seat: 19,
    departureDate: new Date(2024, 5, 9),
    arrivalDate: new Date(2024, 5, 10),
    departurePlace: "Moscow",
    arrivalPlace: "Praha"
})));
//hand.removeItem('3');
//console.log(hand.tickets[0].toString());
//console.log(hand.tickets[1].toString());
hand.editItem(1, { seat: 34 });
console.log(hand.tickets[0].toString());
//console.log(hand.tickets[2].id);
console.log(hand.addItems([
    new Ticket({
        id: "4",
        description: "I'm description 4",
        createdAt: new Date(),
        seat: 27,
        departureDate: new Date(2023, 1, 21),
        arrivalDate: new Date(2023, 1, 22),
        departurePlace: "Minsk",
        arrivalPlace: "Zurich"
    }), new Ticket({
        id: "5",
        description: "I'm description 5",
        createdAt: new Date(),
        seat: 54,
        departureDate: new Date(2023, 11, 9),
        arrivalDate: new Date(2023, 11, 10),
        departurePlace: "Minsk",
        arrivalPlace: "London"
    })
]))
console.log(hand.tickets[3].toString());
console.log(hand.tickets[4].toString());
