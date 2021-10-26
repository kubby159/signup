//1. input 불러오기
let inputYourId = document.getElementById("username");
let inputYourPwd = document.getElementById("password");
let inputYourPwdCheck = document.getElementById("passwordcheck");
let idFailureMessage = document.querySelector(".failuremessage");
let pwdFailureMessage = document.querySelector(".failuremessage2");
let pwdFailureMessage2 = document.querySelector(".failuremessage3");

//2. 아이디는 4글자 이상이어야함.
// 입력값을 불러와서 4자리 이상인지 확인하기.

inputYourId.addEventListener("keyup", () => {
  if (isMatch(inputYourId.value)) {
    //실패 메세지 노출 X
    idFailureMessage.classList.add("hide");
  } else {
    //실패 메세지 노출
    idFailureMessage.classList.remove("hide");
  }
});

//3. 비밀번호는 8자 이상 이어야하고, 특수문자 @가 섞여있어야함.
inputYourPwd.onkeyup = function () {
  let test = inputYourPwd.value;

  let arr = [];
  //우선 입력 다 받는다.
  //입력받은 걸 배열에 넣는다. ex) hi-> ['h','i'];

  for (let i = 0; i < test.length; i++) {
    arr.push(test[i]);
  }

  if (arr.includes("@")) {
    //@이 있으면 메시지 출력안하기
    pwdFailureMessage.classList.add("hide");
  } else {
    //@이 없으면 메시지 출력하기
    pwdFailureMessage.classList.remove("hide");
  }
};

//4. 비밀번호 일치여부

inputYourPwdCheck.onkeyup = function () {
  if (inputYourPwd.value !== inputYourPwdCheck.value) {
    //서로 다르면 실패메세지 출력
    pwdFailureMessage2.classList.remove("hide");
  } else {
    //서로 일치하면 실패메세지 숨김
    pwdFailureMessage2.classList.add("hide");
  }
};

// inputYourPwd.addEventListener("keyup", () => {
//   if (isMatchPwd(inputYourPwd.value)) {
//     console.log("Good");
//   } else {
//     console.log("Too short");
//   }
// });

//id check
function isMatch(value) {
  return value.length >= 4;
}

//pwd check

function isMatchPwd(value) {
  return value.length >= 8;
}
