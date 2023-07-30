function handleOnChange(){
    var e = document.getElementById("LanguageSelect");
    var strUser = e.value;
    if(strUser === "en-KR")
    {
        alert("현재 개발이 완료되지 않아 선택하신 언어의 공식 홈페이지로 이동합니다.");
        location.href="https://www.netflix.com/kr-en/";
    }
}

function loginbtn(){
    alert("로그인 화면 개발중에 있어 공식 홈페이지 로그인화면으로 이동합니다.");
    location.href="https://www.netflix.com/kr/login";
}