
      const http_get_estado_alarma = new XMLHttpRequest();
      const url_get_estado_alarma = 'https://apiproyecto1ace2.herokuapp.com/api/alarmas?filter[order]=id%20DESC&filter[limit]=1';
       
      // var popupp = require('popups');
      var modo;
      var contador_alarma = 0;
      var estado_arr = [];
      var params;
      var estado_alarma = 0;
      const boton_alarma = document.getElementById('modo_robo');
      boton_alarma.addEventListener('click', function(e){
        // console.log('boton presionado');
        // ========================= Obteniendo estado de alarma =========================
        http_get_estado_alarma.open("GET", url_get_estado_alarma );
        http_get_estado_alarma.send();

        http_get_estado_alarma.onreadystatechange = (e) => {
        
          console.log(http_get_estado_alarma.responseText);
          estado_arr = JSON.parse(http_get_estado_alarma.responseText);
          console.log(estado_arr);
          var estado;
          var k;
          estado = estado_arr[0].estado;
          if(estado == 0){
              console.log("ESTADO DESACTIVADO");
              modo = 1;
              contador_alarma++;
              
              // popupp.alert({
              //   content: 'ALARMA DESACTIVADA'
              // });
              // alelrt("ALARMA DESACTIVADA");
          }else{
            console.log("ESTADO ACTIVADO");
            modo = 0;
            // alelrt("ALARMA ACTIVADA");
          }
          // document.getElementById("tabla").innerHTML = table_content;
        }
        if (contador_alarma > 1){
                contador_alarma--;
              }
              document.getElementById("contador_alarma_activa").innerHTML = contador_alarma;
        // ========================= Cambiando a modo robo =========================
        const http_post_modo = new XMLHttpRequest();
        const url_post_modo = 'http://apiproyecto1ace2.herokuapp.com/api/modos';

        
        http_post_modo.open("POST", url_post_modo);
        http_post_modo.setRequestHeader('Content-Type', 'application/json');
        // http_post_modo.send();
        var cont = {"estadomodo": modo };
        cont = JSON.stringify(cont);
        console.log(cont);
          
        http_post_modo.send(cont);

        http_post_modo.onreadystatechange = (e) => {
          
          if(http_post_modo.readyState == 4 && http_post_modo.status == 200){
            alert(http_post_modo.responseText);
            // console.log(http_post_modo.responseText);
          }
          
          
          // alert(http_post_modo.responseText);
        }
        

      });