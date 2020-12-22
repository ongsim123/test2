function standardMove(ret, firstArr, answer, move) {
  switch (move) {
    case "R":
      ret[0][2] = firstArr[2][2];
      ret[1][2] = firstArr[0][2];
      ret[2][2] = firstArr[1][2];
      break;
    case "L":
      ret[0][0] = firstArr[1][0];
      ret[1][0] = firstArr[2][0];
      ret[2][0] = firstArr[0][0];
      break;
    case "U":
      ret[0][0] = firstArr[0][2];
      ret[0][1] = firstArr[0][0];
      ret[0][2] = firstArr[0][1];
      break;
    case "B":
      ret[2][0] = firstArr[2][1];
      ret[2][1] = firstArr[2][2];
      ret[2][2] = firstArr[2][0];
      break;
    default:
      return;
  }
  answer = `${ret[0].join("")}<br>${ret[1].join("")}<br>${ret[2].join("")}`;
}

function singlequoteMove(ret, firstArr, answer, move) {
  switch (move[i]) {
    case "R":
      ret[0][2] = firstArr[1][2];
      ret[1][2] = firstArr[2][2];
      ret[2][2] = firstArr[0][2];
      break;
    case "L":
      ret[0][0] = firstArr[2][0];
      ret[1][0] = firstArr[0][0];
      ret[2][0] = firstArr[1][0];
      break;
    case "U":
      ret[0][0] = firstArr[0][1];
      ret[0][1] = firstArr[0][2];
      ret[0][2] = firstArr[0][0];
      break;
    case "B":
      ret[2][0] = firstArr[2][2];
      ret[2][1] = firstArr[2][0];
      ret[2][2] = firstArr[2][1];
      break;
    default:
      return;
  }
  answer = `${ret[0].join("")}<br>${ret[1].join("")}<br>${ret[2].join("")}`;
}

function quitMove() {

}

function typingError(userInput, i, str) {
  alert("입력 오류. 재입력 바랍니다.");
  userInput.innerHTML = `CUBE> 입력 오류!`;
  str += `-${i}는 올바른 입력이 아닙니다.`;
}


function main() {
  const userInput = document.getElementById("userInput");
  const result = document.getElementById("result");
  const move = document.getElementById("move").value.toUpperCase();
  let firstArr = [["R", "R", "W"], ["G", "C", "W"], ["G", "B", "B"]];

  let ret = firstArr.map((item) => item.map((item) => item)); // 첫 시작 초기상태 세팅
  let str = ""; //큐브 각 동작마다 출력할 문자열
  let answer = ``;
  userInput.innerHTML = `CUBE> ${move}`; // CUBE MOVE 출력 단
  for (let i = 0; i < move.length; i++) {// MOVE 배열 루프
    if (move[i] === "Q") {
      // Quit
      str += `-${move[i]}-<p>Bye~</p>`;
      result.innerHTML = str; // break하면 for문 마지막 str에 추가 안되기 때문에 추가
      break;
    } else if (move[i + 1] === "'") {// 뒤에 ' 붙어있는 경우
      /*switch (move[i]) {
        case "R":
          ret[0][2] = firstArr[2][2];
          ret[1][2] = firstArr[0][2];
          ret[2][2] = firstArr[1][2];
          break;
        case "L":
          ret[0][0] = firstArr[1][0];
          ret[1][0] = firstArr[2][0];
          ret[2][0] = firstArr[0][0];
          break;
        case "U":
          ret[0][0] = firstArr[0][2];
          ret[0][1] = firstArr[0][0];
          ret[0][2] = firstArr[0][1];
          break;
        case "B":
          ret[2][0] = firstArr[2][1];
          ret[2][1] = firstArr[2][2];
          ret[2][2] = firstArr[2][0];
          break;
        default:
          return;
      }
      let answer = `${ret[0].join("")}<br>${ret[1].join("")}<br>${ret[2].join("")}`;*/
      singlequoteMove(ret, firstArr, answer);
      str += `-${move[i] + move[i + 1]}-<p>${answer}</p>`;
      i++;
    } else if (move[i] === "R" || move[i] === "L" || move[i] === "U" || move[i] === "B") {// 뒤에 ' 안붙어있는 경우
      /*switch (move[i]) {
        case "R":
          ret[0][2] = firstArr[1][2];
          ret[1][2] = firstArr[2][2];
          ret[2][2] = firstArr[0][2];
          break;
        case "L":
          ret[0][0] = firstArr[2][0];
          ret[1][0] = firstArr[0][0];
          ret[2][0] = firstArr[1][0];
          break;
        case "U":
          ret[0][0] = firstArr[0][1];
          ret[0][1] = firstArr[0][2];
          ret[0][2] = firstArr[0][0];
          break;
        case "B":
          ret[2][0] = firstArr[2][2];
          ret[2][1] = firstArr[2][0];
          ret[2][2] = firstArr[2][1];
          break;
        default:
          return;
      }
      let answer = `${ret[0].join("")}<br>${ret[1].join("")}<br>${ret[2].join("")}`;*/
      standardMove(ret, firstArr, answer, move[i])
      str += `-${move[i]}-<p>${answer}</p>`;
    } else {// 입력 오류
      /*alert("입력 오류. 재입력 바랍니다.");
      userInput.innerHTML = `CUBE> 입력 오류!`;*/
      typingError(userInput);
      str += `-${move[i]}는 올바른 입력이 아닙니다.`;
      break;
    }
    firstArr = ret.map((item) => item.filter((item) => item));
    result.innerHTML = str;
  }
}
main();
