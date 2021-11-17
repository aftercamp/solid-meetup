// Open-Closed Principle
// Software entities(Classes, modules, functions)
// should be open for extension, not modification.

class SuperHero {
  constructor(name: string) {}
  getWeapons() {}
}

class Thor extends SuperHero {
  getWeapons() {
    return 'storm breaker';
  }
}

class CaptainAmerica extends SuperHero {
  getWeapons() {
    return 'Shield';
  }
}

class Ironman extends SuperHero {
  getWeapons() {
    return 'Suit';
  }
}
