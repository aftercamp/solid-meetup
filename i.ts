// Interface Segregation Principle
// A Client should not be forced to depend upon interfaces and methods that they do not use.

interface IEmployee {
  reportHours();
  calculatePay();
  terminateEmployee();
}

class HRManager implements IEmployee {
  reportHours() {}
  calculatePay() {}
  terminateEmployee() {}
}

class CompensationManager implements IEmployee {
  reportHours() {}
  calculatePay() {}
}

//////////

// interface ICompensationManager {
//   reportHours();
//   calculatePay();
// }

// interface IManager {
//   terminateEmployee();
// }

// class HRManager implements ICompensationManager, IManager {
//   reportHours() {}
//   calculatePay() {}
//   terminateEmployee() {}
// }

// class CompensationManager implements ICompensationManager {
//   reportHours() {}
//   calculatePay() {}
// }
