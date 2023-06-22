function tickets(tickets: Array<any>, criteria: string) {
  class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let result: Array<Ticket> = [];

  for (let ticket of tickets) {
    let [destination, price, status] = ticket.split("|");
    result.push(new Ticket(destination, Number(price), status));
  }

  switch (criteria) {
    case "destination":
      result.sort((a, b) => a.destination.localeCompare(b.destination));
      break;
    case "price":
      result.sort((a, b) => a.price - b.price);
      break;
    case "status":
      result.sort((a, b) => a.status.localeCompare(b.status));
      break;
  }

  return result;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
