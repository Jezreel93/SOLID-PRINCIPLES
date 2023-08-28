/**
 * Without Dependency Injection
 * Let's first start by looking at what code might look like without using Dependency Injection


class MySQLDatabase {
    save(data: string) {
      // Save data to MySQL database
      console.log(`Saving ${data} to MySQL database`);
    }
  }
  
  class UserController {
    private database: MySQLDatabase;
  
    constructor() {
      this.database = new MySQLDatabase();
    }
  
    createUser(data: string) {
      // Some user creation logic here
      this.database.save(data);
    }
  }
  
  const controller = new UserController();
  controller.createUser("John Doe");


    Here, UserController is tightly coupled with MySQLDatabase. If you need to switch the database, say to a PostgreSQL database, you'd have to change the UserController class, violating the Open/Closed principle as well.

    With Dependency Injection
    Now, let's improve the above example by using Dependency Injection.

    Create an interface for the database.
    Depend on that interface in the UserController class.
    Inject the specific implementation of the database into UserController through its constructor.
    Here's how you could do that in TypeScript:


*/

interface IDatabase {
    save(data: string): void;
  }
  
  class MySQLDatabase implements IDatabase {
    save(data: string) {
      // Save data to MySQL database
      console.log(`Saving ${data} to MySQL database`);
    }
  }
  
  class PostgreSQLDatabase implements IDatabase {
    save(data: string) {
      // Save data to PostgreSQL database
      console.log(`Saving ${data} to PostgreSQL database`);
    }
  }
  
  class UserController {
    private database: IDatabase;
  
    constructor(database: IDatabase) {
      this.database = database;
    }
  
    createUser(data: string) {
      // Some user creation logic here
      this.database.save(data);
    }
  }
  
  // Using MySQLDatabase
  const mySQLController = new UserController(new MySQLDatabase());
  mySQLController.createUser("John Doe");
  
  // Using PostgreSQLDatabase
  const postgreSQLController = new UserController(new PostgreSQLDatabase());
  postgreSQLController.createUser("Jane Doe");
  