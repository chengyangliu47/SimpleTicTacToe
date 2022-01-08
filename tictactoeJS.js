var cells = document.getElementsByClassName ('boardCell')
var turn = "x"

//console.log(cells);
//console.log(cells.length);

for (let i = 0; i < cells.length; i++) {
  console.log(cells[i]);
  cells[i].onmouseover = function () {
    cells[i].style.backgroundColor  = 'grey';
  };

  cells[i].onmouseout = function () {
    cells[i].style.backgroundColor  = 'white';
  };
  cells[i].onclick = function () {
    cells[i].innerText = turn;
    winnerCheck();
    if (turn == "x") {
      turn = "o";
    }else {
      turn = "x";
    }
  }
}

function winnerCheck() {
  if (cells[0].innerHtml == cells[1].innerHtml && cells[1].innerHtml == cells[2].innerHtml && cells[2].innerHtml != null) {
    console.log(true);
    return true;
  }else if (cells[3].innerHtml == cells[4].innerHtml && cells[4].innerHtml == cells[5].innerHtml && cells[5].innerHtml != null) {
    console.log(true);
    return true;
  }else if (cells[6].innerHtml == cells[7].innerHtml && cells[7].innerHtml == cells[8].innerHtml && cells[8].innerHtml != null) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
