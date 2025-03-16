const btnMode = document.querySelector('.btn-mode');
const pictures = document.querySelectorAll('.picture');
const picturesBox = document.querySelector('.pictures');
const colorMode = document.querySelector('.color-mode');
const root = document.documentElement;


btnMode.addEventListener('click', function(){
    document.body.classList.toggle('menu-open');
});

colorMode.addEventListener('change', function(evt){
    // console.log(this);
    // console.log(evt)

    if (evt.target.id == "color-picker"){
        const bgc = evt.target.value;
        pictures.forEach((picture)=>{
            picture.style.backgroundColor = bgc;
        })
    }
    else{
    const bMode = this.querySelector('input:checked').value;
    // console.log(bMode);
    root.style.setProperty("--bmode", bMode);
    }
});

pictures.forEach((picture) =>{
    // console.log(picture);
    picture.style.backgroundColor = randColor()
} );

function randColor(){
    function rand(){
        return Math.floor(Math.random()*200);
    }
    const rgb= `rgb(${rand()}, ${rand()}, ${rand()})`;
    return rgb
}

// secret messages
picturesBox.addEventListener('click', function(evt){
evt.target.parentElement.classList.toggle('message-up');
} );

