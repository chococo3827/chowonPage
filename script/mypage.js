// mypage js

// 화면단위로 스크롤
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

const mHtml = $("html");
let page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    let posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// 스크롤 시 애니메이셔 효과
$(window).scroll(function(){
    const sct = $(this).scrollTop();

    $("#aboutMe_info").each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })

    $('#html').each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })
    $('#css').each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })
    $('#javascript').each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })
    $('#jquery').each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })
    $('#github').each(function(){
        const itemOst = $(this).offset().top - 500;
        const itemEffect = $(this).attr('data-effect');
        if(sct >= itemOst){
            $(this).addClass(itemEffect);
        }
    })
})

$(window).scroll(function(){
    $('#first').each(function(){
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_element){
            $(this).addClass('active');
        }
    })
})

// header hover 효과
$(function(){
    $('header nav ul li a').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    )
})

// 숫자 카운트 애니메이션
$(window).scroll(function(){
    $('.count-num').each(function() { // .count-num에 각각 적용
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_element){
            var $this = $(this),
            countTo = $this.attr('data-count');
            // $this = 첫번째~세번째 .count-num
            // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(90,70,60)
            
            $({ countNum: $this.text()}).animate({
                countNum: countTo 
                // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
                // 0에서 countNum이 된다
            },
            {
                duration: 5000, // 애니메이션이 완료될때까지 걸리는 시간
                easing:'linear', // 애니메이션 효과 방식
                step: function() { // 움직임 각 스텝별로 실행될 함수
                    $this.text(Math.floor(this.countNum));
                    // Math.floor -> this.countNum의 값을 정수로 만들어준다
                },
                complete: function() { // 움직임이 멈춘 후 실행될 함수
                    $this.text(this.countNum);
                    // this.countNum이 $this의 text값이 된다
                    //alert('finished');
                }
            });  
        }
      });
})