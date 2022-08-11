// Index Signatures
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Fred';
seats.A2 = 'Tom';
seats['A3'] = 'Sun';
