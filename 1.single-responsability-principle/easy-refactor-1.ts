// Without SRP

/**
 class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    saveToDatabase() {
        // logic to save user to a database
        console.log(`Saving user ${this.name} to database.`);
    }
}
**/

// With SRP

class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  saveUser(user: User) {
    console.log(`Saving user ${user.name} to database.`);
  }
}

const repository = new UserRepository();
const user = new User("Isaac", "isaac@live.com");

repository.saveUser(user);
