(function () {
    // window.addEventListener("scroll",(e)=>{
    //     //console.log(e);
    //     let scrTop = document.documentElement.scrollTop,
    //         topNav = document.getElementById("blog-topNav")
    //     ;
    //     //console.log(scrTop);
    //
    //     if ( scrTop>0  ){
    //         topNav.style.transform = "translateY(-60px)"
    //         topNav.style.opacity = '0'
    //     }else {
    //         topNav.style.transform = "translateY(0)"
    //         topNav.style.opacity = '1'
    //     }
    // })

    window.addEventListener("mousewheel",(e)=>{
        console.log(e.deltaY);
        let del = e.deltaY;
        let topNav = document.getElementById("blog-topNav");

        if ( del > 0  ){
            topNav.style.transform = "translateY(-60px)"
            topNav.style.opacity = '0'
        }else {
            topNav.style.transform = "translateY(0)"
            topNav.style.opacity = '1'
        }
    })
})()