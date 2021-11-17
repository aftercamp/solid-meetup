// Dependency Inversion Principle
// Abstractions should not depend on details.
// Details should depend on abstractions.

abstract class BaseController {}

interface IEmailService {}

class MailGunService implements IEmailService {}

// Bad!
class CreateUserController extends BaseController {
  // we're limiting ourselves to a particlar concrete class.
  private emailService: MailGunService; // <- concretion

  constructor(emailService: MailGunService) {
    super();
    this.emailService = emailService;
  }
}

// // SUPER BAD!!!
// class CreateUserController extends BaseController {
//   // we're limiting ourselves to a particlar concrete class.
//   private emailService: MailGunService = new MailGunService(); // <- concretion

//   constructor(emailService: MailGunService) {
//     super();
//   }
// }

////////

// Good :)
// class CreateUserController extends BaseController {
//   private emailService: IEmailService; // <- abstraction
//
//   constructor(emailService: IEmailService) {
//     super();
//     this.emailService = emailService;
//   }
// }
