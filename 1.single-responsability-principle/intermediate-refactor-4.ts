// WITHOUT SRP

/**

    class Logger {

        formatMessage(message: string, level: string): string {
            const date = new Date().toISOString();
            return `${date} - ${level.toUpperCase()} - ${message}`;
        }

        logToFile(formattedMessage: string) {
            // Logic to write to a file
            console.log(`Writing to file: ${formattedMessage}`);
        }

        logToConsole(formattedMessage: string) {
            console.log(formattedMessage);
        }

        sendEmailNotification(formattedMessage: string) {
            if (formattedMessage.includes('ERROR')) {
                console.log(`Sending email with error: ${formattedMessage}`);
                // Logic to send email
            }
        }

        log(message: string, level: string = 'info') {
            const formattedMessage = this.formatMessage(message, level);
            this.logToFile(formattedMessage);
            this.logToConsole(formattedMessage);
            this.sendEmailNotification(formattedMessage);
        }
    }

    const logger = new Logger();
    logger.log("This is an informational message.");
    logger.log("This is a critical error!", "error");

*/

class LogMessage {
    message: string;
    level: 'info' | 'error';

    constructor(message: string, level: 'info' | 'error' = 'info') {
        this.message = message;
        this.level = level;
    }
}

class LogMessageFormatter {
    static formatMessage(message: LogMessage): string {
        const date = new Date().toISOString();
        return `${date} - ${message.level.toUpperCase()} - ${message.message}`;
    }
}

class FileLogger {
    static log(message: string) {
        // Logic to write to a file
        console.log(`Writing to file: ${message}`);
    }
}

class ConsoleLogger {
    static log(message: string) {
        console.log(message);
    }
}

class ErrorEmailSender {
        
    static send(message: string) {
        console.log(`Sending email with error: ${message}`);
    }
    
}

class LogWriter {

    static write(message: string) {
        FileLogger.log(message);
        ConsoleLogger.log(message);
    }
}

class LogMessageService {
    
    loggerMessage(message: LogMessage) {

        const formattedMessage = LogMessageFormatter.formatMessage(message);
        LogWriter.write(formattedMessage);
        
        if(message.level === 'error') {
            ErrorEmailSender.send(formattedMessage);
        }
    }
}

const infoMessage = new LogMessage('this is an informational message', 'info');
const errorMessage = new LogMessage('this is an URGENT! message', 'error');
const logMessageService = new LogMessageService()

logMessageService.loggerMessage(infoMessage);
console.log('-------------------');
logMessageService.loggerMessage(errorMessage);