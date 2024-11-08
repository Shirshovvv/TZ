import './main.scss';
document.addEventListener('DOMContentLoaded', ()=>{
    const cards = document.querySelectorAll('.card');
    if(cards.length > 0){
        cards.forEach(card=>{
            const cardTimer = card.querySelector('.card__timer')
            if(cardTimer){
                const btn = card.querySelector('.card__banner__button');
                const timerBody = card.querySelector('.card__timer__body')
                countDown(timerBody, btn);
            }
            card.addEventListener('click', function(e){
                if(e.target.classList == 'card__banner__button' && !e.target.disabled){
                    console.log(this.dataset.name)
                }
            })
        })
    }
    function countDown(timerBody, btn) {
        let seconds = 81370,
        timer = setInterval(function(){
            if(seconds > 0){
                seconds --;
                let h = seconds/3600 ^ 0,
                    m = (seconds - h*3600)/60 ^ 0,
                    s = seconds - h*3600 - m*60,
                    time = (h<10 ? "0"+h : h)+":"+(m<10 ? "0"+m : m)+":"+(s<10 ? "0"+s : s);
                    timerBody.innerText = time
            } else {
                clearInterval(timer);
                btn.setAttribute('disabled', '')
            }
        }, 1000)
    }
}) 