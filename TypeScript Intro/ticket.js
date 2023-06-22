function tickets(tickets, criteria) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    var result = [];
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var ticket = tickets_1[_i];
        var _a = ticket.split("|"), destination = _a[0], price = _a[1], status_1 = _a[2];
        result.push(new Ticket(destination, Number(price), status_1));
    }
    switch (criteria) {
        case "destination":
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case "price":
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case "status":
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    return result;
}
console.log(tickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination"));
console.log(tickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status"));
