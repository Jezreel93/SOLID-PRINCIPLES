/**
 
    Base Class: DatabaseConnection
    A DatabaseConnection class connects to a database, runs queries, and manages transactions.

    class DatabaseConnection {
        protected connectionString: string;

        constructor(connectionString: string) {
            this.connectionString = connectionString;
        }

        connect(): void {
            console.log(`Connecting to database using ${this.connectionString}`);
            // Logic to connect to the database
        }

        runQuery(query: string): any {
            console.log(`Running query: ${query}`);
            // Logic to run query and fetch results
            return "query result";
        }

        beginTransaction(): void {
            console.log("Starting transaction.");
            // Logic to begin a transaction
        }

        commitTransaction(): void {
            console.log("Committing transaction.");
            // Logic to commit a transaction
        }

        rollbackTransaction(): void {
            console.log("Rolling back transaction.");
            // Logic to rollback a transaction
        }
    }

    Subclass: ReadOnlyDatabaseConnection
    Now, suppose we have a replica database that is only for read operations. Thus, it does not support transactions or any form of data mutation.

    class ReadOnlyDatabaseConnection extends DatabaseConnection {
        beginTransaction(): void {
            throw new Error("Cannot begin a transaction on a read-only database.");
        }

        commitTransaction(): void {
            throw new Error("Cannot commit a transaction on a read-only database.");
        }

        rollbackTransaction(): void {
            throw new Error("Cannot rollback a transaction on a read-only database.");
        }

        runQuery(query: string): any {
            if (query.toLowerCase().startsWith("insert") || query.toLowerCase().startsWith("update") || query.toLowerCase().startsWith("delete")) {
                throw new Error("Data modification queries are not allowed on a read-only database.");
            }
            return super.runQuery(query);
        }
    }

    Consider a function that handles a database operation which might use transactions

    function handleDatabaseOperation(connection: DatabaseConnection, query: string): void {
        try {
            connection.beginTransaction();
            const result = connection.runQuery(query);
            console.log(result);
            connection.commitTransaction();
        } catch (error) {
            console.log(error.message);
            connection.rollbackTransaction();
        }
    }

    const readOnlyConnection = new ReadOnlyDatabaseConnection("some_connection_string");
    handleDatabaseOperation(readOnlyConnection, "SELECT * FROM users"); // Throws an error

 */

interface IConnectable {
  connect(): void;
}

interface IQueryable {
  runQuery(query: string): any;
}

interface IWritableConnection {
  beginTransaction(): void;
  commitTransaction(): void;
  rollbackTransaction(): void;
}

class DatabaseConnection
  implements IConnectable, IQueryable, IWritableConnection
{
  protected connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }
  connect(): void {
    console.log(`Connecting to database using ${this.connectionString}`);
    // Logic to connect to the database
  }
  runQuery(query: string): any {
    console.log(`Running query: ${query}`);
    // Logic to run query and fetch results
    return "query result";
  }

  beginTransaction(): void {
    console.log("Starting transaction.");
    // Logic to begin a transaction
  }

  commitTransaction(): void {
    console.log("Committing transaction.");
    // Logic to commit a transaction
  }

  rollbackTransaction(): void {
    console.log("Rolling back transaction.");
    // Logic to rollback a transaction
  }
}

class ReadOnlyDatabaseConnection implements IConnectable, IQueryable {
  protected connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  connect(): void {
    console.log(`Connecting to database using ${this.connectionString}`);
    // Logic to connect to the database
  }
  runQuery(query: string): any {
    console.log(`Running query: ${query}`);
    // Logic to run query and fetch results
    return "query result";
  }
  // Only contains connect() and runQuery() methods, without the transaction methods.
}

function handleDatabaseOperation(connection: IConnectable & IQueryable & IWritableConnection, query: string): void {
    try {
        connection.beginTransaction();
        const result = connection.runQuery(query);
        console.log(result);
        connection.commitTransaction();
    } catch (error) {
        console.log(error.message);
        connection.rollbackTransaction();
    }
}

const normalConnection = new DatabaseConnection("connection_string_for_main_db");
handleDatabaseOperation(normalConnection, "INSERT INTO users VALUES ('John')"); 

const readOnlyConnection = new ReadOnlyDatabaseConnection("connection_string_for_replica_db");
// handleDatabaseOperation(readOnlyConnection, "SELECT * FROM users"); 
// This will result in a compile-time error because ReadOnlyDatabaseConnection doesn't implement Transactionable.
