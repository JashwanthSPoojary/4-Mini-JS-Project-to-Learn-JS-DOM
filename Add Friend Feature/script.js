var isStatus = document.querySelector("h5");
var btn = document.querySelector("button");
var flag = 0;

btn.addEventListener("click",function () {
    if(flag == 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor = "Red"

        flag = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor = "green"
        flag = 0;
    }
});

