// Valor inicial contador
let count = 0;

// Seleccione value y buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // Obtengo la lista de clases de cada boton
        const styles =  e.currentTarget.classList;
        console.log(e.currentTarget.classList);
        if (styles.contains('decrease'))
            count--;
        else if(styles.contains('increase'))
            count++;
        else
            count = 0;
        if (count > 0)
            value.style.color = "green";
        else if (count < 0)
            value.style.color = "red";
        else if(count == 0)
            value.style.color = "#222"
        value.textContent = count;
    })
})
