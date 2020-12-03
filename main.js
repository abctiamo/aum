let currentPage = 0; // 默认显示的是第一个页面
const pageArray = [] // 放置四个page的$对象
$('.page').each(function(){
    $(this).hide()
    pageArray.push($(this))
})
pageArray[0].show()
const navClick = num => {
    pageArray[currentPage].hide();
    pageArray[num].show();
    currentPage = num;
}
const handleGpa = () => {
    let num = $('#courseNum').val();
    if( num >= 2 && num <= 5){
        $('#courseInput').html('');
        for(let i = 0;i < num; i++){
            let dom = document.createElement('div');
            dom.className = 'line';
            dom.innerHTML = `<input class='hours'> <input class='grades'>`;
            $('#courseInput')[0].appendChild(dom);
        }
    }else{
        $('#courseInput').html();
        $('#courseNum').val();
        alert("The number input isn't between 2 and 5")
    }
}

const calculate = () => {
    let hours = 0,
        grades = 0;
    let letterGrage = {
        'A': 4,
        'B': 3,
        'C': 2,
        'D': 1,
        'F': 0
    };
    for(let i =0; i < $('#courseNum').val(); i++){
        let hour = Number($($('.hours')[i]).val());
        let grade = Number($($('.grades')[i]).val()) 
                    ? Number($($('.grades')[i]).val()) 
                    : letterGrage[$($('.grades')[i]).val()];
        hours += hour;
        grades += hour*grade;
    }
    if(grades / hours){
        $('#gpa').text((grades / hours).toFixed(2));
    }
    else{
        alert(`there's something wrong with the input`)
    }
}