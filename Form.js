class Form{
    constructor(){
       this.input=createInput('enter name')
       this.button=createButton('play') 
       this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }

    display(){
        var title=createElement('h2');
        title.html("car race");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount=playerCount+1;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            
            
        })
    }
}