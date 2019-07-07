(function () {
    let topLi = document.querySelectorAll('.topList>li');

    topLi.forEach((item,index)=>{

        topLi[index].onclick = function () {
            for (let i =0;i<topLi.length;i++){
                topLi[i].style.backgroundColor = ""
                topLi[0].classList.remove('active')
            }
            this.style.backgroundColor = "#3690cf"
        }
    })
})()