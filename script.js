var num_aux = 0
var num_def = 0
var flag = null
var flag_sub = 0
var num_aux_def = 0

function atualiza_num(valor){

    num_aux = num_aux + valor

    window.document.getElementById('num_atual').innerHTML = `Número atual: ${num_aux}`

}

function desclicar(bt_id){

    window.document.getElementById(bt_id).style.background = 'black'


}

function clicar_1(){

    var a = window.document.getElementById('bt_1')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_2(){

    var a = window.document.getElementById('bt_2')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_3(){

    var a = window.document.getElementById('bt_3')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_4(){

    var a = window.document.getElementById('bt_4')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_5(){

    var a = window.document.getElementById('bt_5')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_6(){

    var a = window.document.getElementById('bt_6')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_7(){

    var a = window.document.getElementById('bt_7')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_8(){

    var a = window.document.getElementById('bt_8')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_9(){

    var a = window.document.getElementById('bt_9')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)


}

function clicar_0(){

    var a = window.document.getElementById('bt_0')

    a.style.background = '#32332E'

    atualiza_num(a.innerHTML)

}

function soma(){

    num_aux_def = Number(num_aux)

    num_def = Number(num_def)

    num_def = num_def + num_aux_def

    num_aux = 0

    flag = '1'

}

function subtracao(){

    flag_sub = Number(flag_sub)

    num_aux_def = Number(num_aux)

    num_def = Number(num_def)

    if(num_def == 0 && flag_sub == 0){
    
        num_def = num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }
    else if(num_def == 0 && flag_sub != 0){

        num_def = num_def - num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }    
    else if(num_def != 0){

        num_def = num_def - num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }

    flag = '2'

}

function multiplicacao(){

    flag_sub = Number(flag_sub)

    num_aux_def = Number(num_aux)

    num_def = Number(num_def)

    if(num_def == 0 && flag_sub == 0){

        num_def = num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }
    else if(num_def == 0 && flag_sub != 0){

        num_def = num_def * num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }
    else if(num_def != 0){

        num_def = num_def * num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }

    flag = '3'

}

function divisao(){

    flag_sub = Number(flag_sub)

    num_aux_def = Number(num_aux)

    num_def = Number(num_def)

    if(num_def == 0 && flag_sub == 0){

        num_def = num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }
    else if(num_def == 0 && flag_sub != 0){

        num_def = num_def / num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }
    else if(num_def != 0){

        num_def = num_def / num_aux_def
        num_aux = 0
        flag_sub = flag_sub + 1
    }

    flag = '4'
}

function reset(){

    num_aux = 0
    num_def = 0
    flag = null
    num_aux_def = 0
    flag_sub = 0

    window.document.getElementById('num_atual').innerHTML = 'Número atual:'
    window.document.getElementById('resultado').innerHTML = 'Resultado'


}

function igual(){

    if(flag == '1'){

    
        num_aux_def = Number(num_aux)

        num_def = num_def + num_aux_def

        window.document.getElementById('resultado').innerHTML = num_def

    }
    else if(flag == '2'){

        num_aux_def = Number(num_aux)

        num_def = num_def - num_aux_def

        window.document.getElementById('resultado').innerHTML = num_def
    }
    else if(flag == '3'){

        num_aux_def = Number(num_aux)

        num_def = num_def * num_aux_def

        window.document.getElementById('resultado').innerHTML = num_def
    }
    else if(flag == '4'){

        num_aux_def = Number(num_aux)

        num_def = num_def / num_aux_def

        window.document.getElementById('resultado').innerHTML = num_def
        
    }



}









