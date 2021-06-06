function horario(){
    var conte = document.getElementById('conteudo');
    var hora = new Date();
    var horario = hora.getHours();
    var minutos = hora.getMinutes()
    var img = document.getElementById('imag')    
    var footer = document.getElementById('footer')
    var header = document.getElementById('header')
    var corpo = document.getElementById('body')
    var data = document.getElementById('data')
    var dia = String(hora.getDate()).padStart(2, '0'); //pegando o dia
    var mes = String(hora.getMonth()+1).padStart(2,'0');//pegando mes
    var ano = String(hora.getFullYear())//pegando ano
    //conte.innerHTML = '<p>Bom dia!  ' + horario + ':' + minutos + '</p>'
    conte.style.textAlign = 'center'
    if (horario >= 0 && horario < 12){
        conte.innerHTML = '<p> BOM DIA! Agora são ' + horario + ':' + minutos + 'Hrs </p>'
        img.setAttribute('src', 'img/manha.png')
        corpo.style.backgroundImage = "url('img/banner.Manha.png')"
        conte.style.color = '#e96401'
        header.style.color = '#32a5d3'
        footer.style.color = '#32a5d3'
        data.innerHTML = dia + '/' + mes + '/' + ano
        data.style.color = '#e96401'
    }else if(horario >= 12 && horario < 18){
        conte.innerHTML = '<p> BOA TARDE! Agora são ' + horario + ':' + minutos + 'Hrs </p>'
        img.setAttribute('src', 'img/tarde.png')
        corpo.style.backgroundImage = "url('img/tarde.banner.JPG')"
        conte.style.color = '#809fbc'
        header.style.color = '#272823'
        footer.style.color = '#272823'
        data.innerHTML = dia + '/' + mes + '/' + ano
        data.style.color = '#809fbc'
    }else{
        conte.innerHTML = '<p> BOA NOITE! Agora são ' + horario + ':' + minutos + 'Hrs </p>'
        img.setAttribute('src', 'img/fotoNoite.png')
        corpo.style.backgroundImage = "url('img/banner noite.jpg')"
        conte.style.fontSize = '19px'
        conte.style.fontWeight = '900'
        conte.style.color = '#5f7978'
        header.style.color = '#f7feff'
        footer.style.color = '#f7feff'
        data.innerHTML = dia + '/' + mes + '/' + ano
        data.style.color = '#5f7978'
    }
}