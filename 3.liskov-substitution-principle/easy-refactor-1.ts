// Without LSP

/**

    class Bird {
        fly(): void {
            console.log("This bird can fly!");
        }
    }

    Now, you decide to create a subclass called Penguin:

    class Penguin extends Bird {
        fly(): void {
            throw new Error("Penguins can't fly!");
        }

        swim(): void {
            console.log("This penguin can swim!");
        }
    }

    function makeBirdFly(bird: Bird) {
        bird.fly();
    }
    
    const penguin = new Penguin();
    makeBirdFly(penguin);  // Throws an error since penguins can't fly!

 */

    interface FlyingBird {
        fly(): void;
    }
    
    interface SwimmingBird {
        swim(): void;
    }
    
    class Sparrow implements FlyingBird {
        fly(): void {
            console.log("The sparrow flies!");
        }
    }
    
    class Penguin implements SwimmingBird {
        swim(): void {
            console.log("The penguin swims!");
        }
    }
    
    function makeBirdFly(bird: FlyingBird) {
        bird.fly();
    }
    
    function makeBirdSwim(bird: SwimmingBird) {
        bird.swim();
    }
    