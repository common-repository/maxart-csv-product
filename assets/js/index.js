let click_sale_price_dates_from = true;

function onClickAdd_sale_price_dates_from() {
  if (click_sale_price_dates_from) {
    document.getElementById("add-field-new").innerHTML += `
    <div class="onClickAdd_sale_price_dates_from d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input onkeyup="validateInput()" type="text" placeholder="title" class="form-control"name="title_sale_price_dates_from" value="Sale Price Dates From">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">Dates From</span>
        <select name="_sale_price_dates_from" id="" hidden value="">
        <option selected value="_sale_price_dates_from"></option>
        </select>
    </div>
    `;
    click_sale_price_dates_from = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_sale_price_dates_from = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_sale_price_dates_from").remove();
  }
}

let click_sale_price_dates_to = true;

function onClickAdd_sale_price_dates_to() {
  if (click_sale_price_dates_to) {
    document.getElementById("add-field-new").innerHTML += `
    <div class="onClickAdd_sale_price_dates_to d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input type="text"onkeyup="validateInput()" placeholder="title" class="form-control"name="title_sale_price_dates_to" value="sale price dates to">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">dates to</span>
        <select name="_sale_price_dates_to" hidden id="">
        <option selected value="_sale_price_dates_to">dates to</option>
        </select>
    </div>
    `;
    click_sale_price_dates_to = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_sale_price_dates_to = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_sale_price_dates_to").remove();
  }
}

let click_stock_status = true;

function onClickAdd_stock_status() {
  if (click_stock_status) {
    document.getElementById("add-field-new").innerHTML += `
    <div class=" onClickAdd_stock_status d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input type="text"onkeyup="validateInput()" placeholder="title" class="form-control"name="title_stock_status" value="Stock Status">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">Stock Status</span>
        <select name="_stock_status" hidden id="">
        <option selected value="_stock_status">Stock Status</option>
        </select>
    </div>
    `;
    click_stock_status = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_stock_status = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_stock_status").remove();
  }
}
let click_sale_price = true;

function onClickAdd_sale_price() {
  if (click_sale_price) {
    document.getElementById("add-field-new").innerHTML += `
    <div class="onClickAdd_sale_price d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input type="text"onkeyup="validateInput()" placeholder="title" class="form-control"name="title_sale_price" value="Sale Price">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">Sale Price</span>
        <select name="_sale_price" hidden id="">
        <option  selected value="_sale_price">Sale Price</option>
        </select>
    </div>
    `;
    click_sale_price = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_sale_price = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_sale_price").remove();
  }
}
let click_regular_price = true;

function onClickAdd_regular_price() {
  if (click_regular_price) {
    document.getElementById("add-field-new").innerHTML += `
    <div class="onClickAdd_regular_price d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input type="text"onkeyup="validateInput()" placeholder="title" class="form-control"name="title_regular_price" value="Regular Price">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">Regular Price</span>
        <select name="_regular_price" hidden id="">
        <option selected value="_regular_price">Regular Price</option>
        </select>
    </div>
    `;
    click_regular_price = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_regular_price = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_regular_price").remove();
  }
}
let click_sku = true;

function onClickAdd_SKU() {
  if (click_sku) {
    document.getElementById("add-field-new").innerHTML += `
    <div class="onClickAdd_SKU d-flex pt-2 col-4 align-content-start align-items-start">
    <div class="d-flex flex-column w-100">
        <input type="text"onkeyup="validateInput()" placeholder="title" class="form-control"name="title_sku" value="SKU">
        <small style="color:red;min-height:21px;"></small>
                                        </div>
        <span class="input-group-text">SKU</span>
        <select name="_sku" hidden id="">
            <option selected value="_sku">SKU</option>
        </select>
    </div>
    `;
    click_sku = false;
    event.target.classList.remove("btn-outline-dark");
    event.target.classList.add("btn-dark");
  } else {
    click_sku = true;
    event.target.classList.add("btn-outline-dark");
    event.target.classList.remove("btn-dark");
    document.querySelector(".onClickAdd_SKU").remove();
  }
}
let validate = [];
function validateInput() {
  let regexname = /^[a-zA-Z ]{2,30}$/i;
  if (regexname.test(event.target.value)) {
    event.target.style.setProperty("border", "1px solid green", "important");
    event.target.nextElementSibling.innerHTML = "";
    event.target.setAttribute("data-true", true);
    // validate.push(true);
  } else {
    event.target.style.setProperty("border", "1px solid #761818", "important");
    event.target.nextElementSibling.innerHTML = "the name is incorrect";
    event.target.setAttribute("data-true", false);
  }
}
window.addEventListener("load", () => {
  document.querySelector(".btn-submit-form").addEventListener("click", (e) => {
    if (document.querySelectorAll("[data-true=false]").length > 0) {
      e.preventDefault();
    } else {
      document.querySelector("form").submit();
    }
  });
});
