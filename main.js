document.getElementById('telegram').style.display = 'none';
// document.querySelectorAll('.section_five_container_icon_zakr').style.display = 'none';



document.getElementById('services').addEventListener('click', function () {
    document.querySelector('.section_one').style.display = 'none';
    document.querySelector('.section_one_services').style.display = 'block';
})


document.getElementById('glavn').addEventListener('click', function () {
    document.querySelector('.section_one').style.display = 'flex';
    document.querySelector('.section_one_services').style.display = 'none';
})

document.getElementById('tg').addEventListener('click', function(){
    document.getElementById('instagram').style.display = 'none';
    document.getElementById('telegram').style.display = 'block';
})


document.getElementById('insta').addEventListener('click', function(){
    document.getElementById('instagram').style.display = 'block';
    document.getElementById('telegram').style.display = 'none';
})


// Логика для слайдера

let offest_left = 0; // смещение
const sliderLine = document.querySelector('.section_three_reviews'); // получение строки с элементами

document.getElementById('vlevo').addEventListener('click', function(){
    offest_left = offest_left + 1412;
    if (offest_left > 4560){
        offest_left = 20;
    }
    sliderLine.style.left = -offest_left + 'px';


});


document.getElementById('vpravo').addEventListener('click', function(){
    const st = window.getComputedStyle(sliderLine);
    let delta = st.left;
    if (delta[0] == '-' && delta != '-25px'){
        console.log(offest_left)
        let delta_num = Number(delta.slice(0, 5));
        offest_left = delta_num + 1412;
        console.log(delta, offest_left);
        console.log('----');
        sliderLine.style.left = offest_left + 'px';

    }
});



document.getElementById('otkr_501').addEventListener('click', function () {
    document.getElementById('otkr_501').style.display = 'none';
    document.getElementById('zakr_501').style.display = 'block';
    document.getElementById('501').style.display = 'block';

})
document.getElementById('zakr_501').addEventListener('click', function () {
    document.getElementById('zakr_501').style.display = 'none';
    document.getElementById('otkr_501').style.display = 'block';
    document.getElementById('501').style.display = 'none';
})


document.getElementById('otkr_502').addEventListener('click', function () {
    document.getElementById('otkr_502').style.display = 'none';
    document.getElementById('zakr_502').style.display = 'block';
    document.getElementById('502').style.display = 'block';

})
document.getElementById('zakr_502').addEventListener('click', function () {
    document.getElementById('zakr_502').style.display = 'none';
    document.getElementById('otkr_502').style.display = 'block';
    document.getElementById('502').style.display = 'none';
})