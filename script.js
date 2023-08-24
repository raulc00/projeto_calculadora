var num_aux = 0
var num_atualizado = 0
var num_def = 0
var num_def_def = 0
var flag = null
var flag_igual = 0
var flag_soma = 0
var flag_sub = 0
var num_aux_def = 0

function atualiza_num(valor){

    num_aux = num_aux + valor

    num_atualizado = num_aux

    window.document.getElementById('resultado').innerHTML = `${num_atualizado}`


}

function desclicar(bt_id){

    window.document.getElementById(bt_id).style.background = 'black'

}

function desclicar_reset(){

    window.document.getElementById('bt_reset').style.background = 'red'
}

function desclicar_igual(){

    window.document.getElementById('bt_igual').style.background = 'green'
}

function desclicar_operacoes(bt_id){

    window.document.getElementById(bt_id).style.background = '#2E2F33'
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

    flag_soma = Number(flag_soma)

    if(flag_soma == 0){

        num_aux_def = Number(num_atualizado)

        num_def = Number(num_def)

        num_def = num_def + num_aux_def

        flag_soma = flag_soma + 1
    }
     else if(flag_soma != 0 && flag_igual == 0){

        num_aux_def = Number(num_atualizado)

        num_def = num_def + num_aux_def

        window.document.getElementById('resultado').innerHTML = num_def
    }
    // else if(flag_soma != 0 && flag_igual != 0){

    //     num_aux_def = Number(num_atualizado)

    //     window.document.getElementById('resultado').innerHTML = num_def

    // }

    num_aux = 0
    num_atualizado = 0

    flag = '1'

    window.document.getElementById('bt_soma').style.background = '#28302A'
    
    
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

    window.document.getElementById('bt_sub').style.background = '#28302A'

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

    window.document.getElementById('bt_mult').style.background = '#28302A'

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

    window.document.getElementById('bt_div').style.background = '#28302A'
}

function reset(){

    num_aux = 0
    num_def = 0
    flag = null
    num_aux_def = 0
    flag_sub = 0
    flag_soma = 0
    flag_igual = 0

    window.document.getElementById('bt_reset').style.background = '#E04A20'
    //window.document.getElementById('num_atual').innerHTML = 'Número atual:'
    window.document.getElementById('resultado').innerHTML = 'Resultado'

    // 
    // #E0341A
}

function igual(){

    if(flag == '1'){

        flag_igual = Number(flag_igual)

        if(flag_igual == 0){

            num_aux_def = Number(num_atualizado)

            num_def = num_def + num_aux_def

            window.document.getElementById('resultado').innerHTML = num_def

        }
        else if(flag_igual != 0 && flag_soma == 1){

            num_aux_def = Number(num_atualizado)

            num_def = num_def + num_aux_def

            window.document.getElementById('resultado').innerHTML = num_def

        }
        else if(flag_igual != 0 && flag_soma > 1){

            num_aux_def = Number(num_atualizado)

            num_def = num_def + num_aux_def

            window.document.getElementById('resultado').innerHTML = num_def
        }

        flag_igual = flag_igual + 1



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

    window.document.getElementById('bt_igual').style.background = '#71F542'



}









