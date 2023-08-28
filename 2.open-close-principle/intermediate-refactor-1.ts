// Without OCP

/*
Scenario: Imagine you are creating a notification system where users can receive notifications through different channels 
(like email, SMS, push notification). Initially, you support only email notifications.

    class User {
        email: string;
        phoneNumber: string;
    }

    class Notifier {
        notify(user: User, message: string) {
            // Send an email to the user
            console.log(`Email sent to ${user.email} with message: ${message}`);
        }
    }

    // Usage:
    const user = new User();
    user.email = "user@example.com";

    const notifier = new Notifier();
    notifier.notify(user, "You have a new message!");

    Now, suppose you want to add support for SMS notifications. Without OCP, you'd modify the Notifier class:

    class Notifier {
        notify(user: User, message: string, channel: string) {
            if (channel === "email") {
                console.log(`Email sent to ${user.email} with message: ${message}`);
            } else if (channel === "sms") {
                console.log(`SMS sent to ${user.phoneNumber} with message: ${message}`);
            }
        }
    }
*/

class User {
    email: string;
    phoneNumber: string;

    constructor(email: string, phoneNumber: string) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

interface INotifier {
    notify(user: User, message: string): void;
}

class UserEmailNotificator implements INotifier {

    notify(user: User, message: string): void {
        console.log(`Email sent to ${user.email} with message: ${message}`);
    }
}

class UserSMSNotificator implements INotifier {

    notify(user: User, message: string): void {
        console.log(`SMS sent to ${user.email} with message: ${message}`);
    }
}

class Notifier {

    notify(user: User, message: string, notifier: INotifier) {
        notifier.notify(user, message);
    }
}

// Usage:
const user = new User('isaac.saavedra@hotmail.com', '+1234567890');
const notificator = new Notifier();
notificator.notify(user, 'You have a new message!', new UserEmailNotificator());
notificator.notify(user, 'You have a new message!', new UserSMSNotificator());
