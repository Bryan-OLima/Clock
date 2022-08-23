class Clock{
    constructor(){  
        this._displayTimeEl = document.querySelector('.dt'); 
        this._currentDate;
        let _locale = 'pt-BR';
        this.initialize();
    }

    initialize(){
        this.setTime();
        setInterval( ()=> {
            this.setTime()
        }, 1000);
    }

    setTime(){
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        console.log(this._displayTimeEl);
    }

/** GETTERS AND SETTERS START**/

    get displayTime(){
        return this._displayTimeEl.innerHTML;
    }

    set displayTime(value){
        return this._displayTimeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        return this._currentDate = value;
    }

/** GETTERS AND SETTERS END**/
}