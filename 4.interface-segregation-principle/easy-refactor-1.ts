/**
    Imagine a scenario where you are building an application for document management, and you decide to create an interface for it:
   
    interface IDocumentManager {
        readDocument(fileName: string): string;
        writeDocument(fileName: string, content: string): void;
        printDocument(fileName: string): void;
    }
    
    class PDFManager implements IDocumentManager {
        readDocument(fileName: string): string {
            // implementation for reading PDF
            return "PDF content";
        }
    
        writeDocument(fileName: string, content: string): void {
            // implementation for writing to PDF
        }
    
        printDocument(fileName: string): void {
            // implementation for printing PDF
        }
    }

    Now, suppose you want to add a TXTManager which deals with TXT files. But the TXTManager cannot print documents. 
    If you use the IDocumentManager interface, the TXTManager will be forced to have a printDocument method, which it does not need. 
    This leads to dummy implementations or exceptions being thrown, which is not clean.

 */

interface IReadable {
    readDocument(fileName: string): string;
}

interface IWritable {
    writeDocument(fileName: string, content: string): void;
}

interface IPrintable {
    printDocument(fileName: string): void;
}

class PDFManager implements IReadable, IWritable, IPrintable {
    readDocument(fileName: string): string {
        // implementation for reading PDF
        return "PDF content";
    }

    writeDocument(fileName: string, content: string): void {
        // implementation for writing to PDF
    }

    printDocument(fileName: string): void {
        // implementation for printing PDF
    }
}
 
class TXTManager implements IReadable, IWritable {
    readDocument(fileName: string): string {
        // implementation for reading TXT
        return "TXT content";
    }

    writeDocument(fileName: string, content: string): void {
        // implementation for writing to TXT
    }
}    

