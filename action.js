//------------------ select elements ------------------
let plus_button = document.getElementById("btn-increase");
let minus_button = document.getElementById("btn-decrease");
let reset_button = document.getElementById("btn-reset");

let set_limit_button = document.getElementById("limit-button");

let limit_input_text = document.getElementById("limit-input");
let text_result = document.getElementById("text-result");

//------------------------------------
let number,
  limit = 10;

let plus_function = function () {
  if (parseInt(text_result.value) + 1 <= limit) {
    ++text_result.value;
  } else {
    document.querySelector("#alert1").classList.add("show", 40);
    setTimeout(function () {
      document.querySelector("#alert1").classList.remove("show");
    }, 1000);
  }
};

document.addEventListener("keydown", function () {
  plus_function();
});

set_limit_button.onclick = function () {
  if (parseInt(limit_input_text.value) >= 0) {
    limit = parseInt(limit_input_text.value);
    document.querySelector("#alert4").classList.add("show", 40);
    if (parseInt(limit_input_text.value) < parseInt(text_result.value)) {
        text_result.value = limit_input_text.value;
    }

    setTimeout(function () {
      document.querySelector("#alert4").classList.remove("show");
    }, 1000);
  } else if (limit_input_text.value == "") {
    document.querySelector("#alert3").classList.add("show", 40);
    setTimeout(function () {
      document.querySelector("#alert3").classList.remove("show");
    }, 1000);
  } else {
    document.querySelector("#alert2").classList.add("show", 40);
    setTimeout(function () {
      document.querySelector("#alert2").classList.remove("show");
    }, 1000);
  }
};

plus_button.onclick = function () {
  plus_function();
};
minus_button.onclick = function () {
  if (parseInt(text_result.value) - 1 >= 0) {
    --text_result.value;
  } else {
    document.querySelector("#alert5").classList.add("show", 40);
    setTimeout(function () {
      document.querySelector("#alert5").classList.remove("show");
    }, 1000);
  }
};
reset_button.onclick = function () {
  limit = 10;

  limit_input_text.value = "";
  text_result.value = "0";
  document.querySelector("#alert6").classList.add("show", 40);
  setTimeout(function () {
    document.querySelector("#alert6").classList.remove("show");
  }, 1000);
};
