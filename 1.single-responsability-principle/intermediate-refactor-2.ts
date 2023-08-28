// WITHOUT SRP

/*
class UserRegistration {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    isValid(): boolean {
        // Validate email and password format
        return this.email.includes('@') && this.password.length >= 6;
    }

    register() {
        if (this.isValid()) {
            // Logic to save user data in a database
            console.log(`User ${this.username} registered.`);
            this.sendWelcomeEmail();
        } else {
            console.log('Invalid user data.');
        }
    }

    sendWelcomeEmail() {
        // Send welcome email logic
        console.log(`Welcome email sent to ${this.email}.`);
    }
}

const user = new UserRegistration("Alice", "alice@example.com", "secure123");
user.register();


*/

class User {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class UserValidator {
 
    private isEmailValid(email: string): boolean {
        return email.includes('@');
    }

    private isPasswordValid(password: string): boolean {
        return password.length >= 6;
    }

    isValid(user: User): boolean {
        return this.isEmailValid(user.email) && this.isPasswordValid(user.password);
    }
}

class EmailSender {

    static sendWelcomeEmail(user: User) {
        console.log(`Welcome email sent to ${user.email}.`);
    }
}

class UserRegistration {

    static register(user: User) {
        // Logic to save user data in a database
        console.log(`User ${user.username} registered.`);
    }
}

const user = new User("Alice", "alice@gmail.com", "secure123");
const validator = new UserValidator();

if (validator.isValid(user)) {
    UserRegistration.register(user);
    EmailSender.sendWelcomeEmail(user);
}else {
    console.log('Invalid user data.');
}