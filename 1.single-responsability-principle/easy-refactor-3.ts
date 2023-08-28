// WITHOUT SRP

/**
 class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    display() {
        const status = this.completed ? "Done" : "Pending";
        console.log(`${this.title} - ${status}`);
    }
}
**/

// WITH SRP

class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}

class TaskDisplay {

    display(task: Task) {
        const status = task.completed ? "Done" : "Pending";
        console.log(`${task.title} - ${status}`);
    }
}