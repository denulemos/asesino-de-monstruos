new Vue ({
    el: '#app',
    data:{
      saludJugador: 100,
      saludMounstro: 100,
      play: false
    },
    methods:{
      empezarJuego: function(){
          this.play= true;
          this.saludJugador= 100;
          this.saludMounstro = 100;
      },

      atacar: function(){
       var daño = this.calcularDaño(3,10);
       this.saludMounstro -= daño;
       if (this.ganamos()){
           return;
       }
       this.ataqueMounstro();
      },

      ataqueMounstro: function(){
       var daño = this.calcularDaño(5,12);
       this.saludJugador -= daño;
       this.ganamos();
      },

      ganamos: function(){
         if (this.saludMounstro<=0){
             if(confirm('GANASTE! Empezar nuevo juego')){
                 this.empezarJuego();
             }
             else{
                 this.play = false;
             }
             return true;
         }
         else if(this.saludJugador <= 0){
             if (confirm("PERDISTE Empezar nuevo juego")){
                 this.empezarJuego();
             }
             else{
                 this.play=false;
             }
             return true;
         }
         return false;
      },

      calcularDaño: function(min, max){
        return Math.max(Math.floor(Math.random()* max) +1, min);
      },

      ataqueEsp: function(){
          var daño = this.calcularDaño(10, 20);
          this.saludMounstro -= daño;
          if (this.ganamos()){
              return;
          }
          this.ataqueMounstro();
      },

      cura: function(){
        if (this.saludJugador <= 90){
            this.saludJugador += 10;
        }
        else{
            this.saludJugador = 100;
        }
        this.ataqueMounstro();
      },

      reinicio: function(){
        this.play= false;
      },

    }
});