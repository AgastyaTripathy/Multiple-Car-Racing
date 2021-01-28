class Form {
    constructor() {
        this.input = createInput("Enter Name") 
        this.button = createButton("Play!")
        this.greeting = createElement('h3')
    }

    display() {
        var title = createElement('h1');
        title.html("MULTIPLAYER CAR RACING GAME")
        title.position(175,50)
        this.input.position(250, 250)
        this.button.position(250, 300)
        this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            this.greeting.html("HELLO" + name)
            this.greeting.position(150, 150);
            playerCount = playerCount + 1;
            console.log("name");
            player.update();
            player.updateCount(playerCount)

        });
         
    }

    hide() {
      this.input.hide()
      this.button.hide()
      this.greeting.hide()

    }

}
