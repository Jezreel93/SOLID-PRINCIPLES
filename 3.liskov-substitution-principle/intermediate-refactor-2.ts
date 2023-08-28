/**

    class FileHandler {
        protected filePath: string;

        constructor(filePath: string) {
            this.filePath = filePath;
        }

        write(data: string): void {
            console.log(`Writing data to ${this.filePath}`);
            // Logic for writing to the file
        }

        read(): string {
            console.log(`Reading data from ${this.filePath}`);
            // Logic for reading from the file
            return "some data";
        }
    }

    Subclass: ReadOnlyFileHandler
    Now, we decide that there's a need for files that can only be read and not written to. A direct subclass might look like:

    class ReadOnlyFileHandler extends FileHandler {

        write(data: string): void {
            throw new Error("Write operation not permitted on a read-only file!");
        }
    }

    Let's say we have a function to log some analytics:

    function logAnalytics(file: FileHandler, data: string): void {
        // Some analytics logic
        file.write(data);
    }
    
    If we use the logAnalytics function with a ReadOnlyFileHandler object, it will throw an error. 
    This is a violation of the LSP as we cannot substitute a FileHandler object with a ReadOnlyFileHandler object without altering the behavior of the program:

    const readOnlyFile = new ReadOnlyFileHandler("path/to/readonly/file");
    logAnalytics(readOnlyFile, "some analytics data"); // Throws an error
    
 */

interface IWritable {
    write(data: string): void;
}

interface IReadable {
    read(): string;
}

class FileZ {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }
}

class FileHandler implements IWritable, IReadable {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

  write(): void {
    console.log(`Writing data to ${this.filePath}`);
    // Logic for writing to the file 
  }

  read(): string {
    console.log(`Reading data from ${this.filePath}`);
    // Logic for reading from the file
    return "some data";
  }
}

class ReadOnlyFile implements IReadable {
    private filePath: string;
    
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    
    read(): string {
        console.log(`Reading data from ${this.filePath}`);
        // Logic for reading from the file
        return "some data";
    }
}

const normalFile = new FileHandler("path/to/normal/file");
const readOnlyFile = new ReadOnlyFile("path/to/readonly/file");

function logAnalytics(file: IWritable, data: string): void {
    // Some analytics logic
    file.write(data);
}

logAnalytics(normalFile, "some analytics data"); // Works fine

// logAnalytics(readOnlyFile, "some analytics data"); 
// This will result in a compile-time error, preventing the mistake
