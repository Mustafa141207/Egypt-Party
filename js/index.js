$(function () {
    $("#loading").slideUp(1000);
    $("body").css({ overflow: "auto" });
    let sideBarWidth = $("#innerSide").innerWidth();
     $("#sideBar").css("left", -sideBarWidth);
    $('#sideBar i').click(function () {
        if ($("#sideBar").css("left")== '0px') {
            $('#sideBar').animate({ left: -sideBarWidth }, 100)
        } else {
            console.log('hi')
             $("#sideBar").animate({ left:0 }, 100);
        }
    })

    $('#party h5').click(function (e) {
        let x = (e.target);
        if ($(x).next(".inner").css('display') == 'block') {
            $(x).next(".inner").css("display", "none");
        } else {
             $(x).next(".inner").css("display", "block");
        }
        
            
            
    })
    $('#innerSide').click(function (e) {
        let href = $(e.target).attr('href');
        let scrool=$(href).offset().top
        $("body , html ").animate({ scrollTop: scrool }, 800)

    })
 
        
})
document.querySelector('#box').addEventListener('keyup', function (e) {
    console.log(e.key)
     let x = $("#counter").html();
    if (e.key == 'Backspace'&x<100) {
           x++
           $("#counter").html(x);
    } else if(x>=1) {
          let z = x - 1;
          $("#counter").html(z);
    }
 
  
   

  
   
   


    
   
 
})