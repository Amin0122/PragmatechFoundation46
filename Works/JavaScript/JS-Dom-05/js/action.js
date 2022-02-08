    let rengBtn = document.querySelector('#btn1');
    btn1.onclick = () => {

        let color1 = Math.floor(Math.random() * 255);
        let color2 = Math.floor(Math.random() * 255);
        let color3 = Math.floor(Math.random() * 255);

        document.body.style.background = "rgb(" + color1 + "," + color2 + "," + color3 + ")"
    }

    let img = document.querySelector('img');
    let btn8 = document.querySelector('#btn8');

    btn8.addEventListener('click', () => {
        img.src = 'images/g83rrbcpsylwwxn9p92q.jpg';
    })

    function red(){
        document.getElementById('basliq').style.color="red";
    }

    function orange(){
        document.getElementById('yazi').style.color="orange";
    }