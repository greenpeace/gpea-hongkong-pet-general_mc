// import $ from "jquery";
import {
  fetchFormInputs,
  getPostURL,
  // getNumSignupsAndTarget,
  showFullPageLoading,
  hideFullPageLoading,
  sendPetitionTracking,
} from "./jquery.mc.form-helper.js";
import { mainShare, whatsAppShare } from "./share.js";
import parallax from "./parallax.js";
//
const { $ } = window;
//
$(() => {
  //
  let nowYear = new Date().getFullYear();
  let targetYear = nowYear - 110;
  for (var i = nowYear - 20; i >= targetYear; i--) {
    $("#Birthdate").append(
      $("<option>", {
        value: i.toString() + "-01-01",
        text: i,
      })
    );
  }
  // initialize the validations
  $("form.form-body").validate({
    errorPlacement: function (error, element) {
      // console.log(error);
      element.after(error);
    },
    submitHandler: function (form) {
      showFullPageLoading();
      try {
        let defaults = fetchFormInputs(document.querySelector("form#mc-form"));
        let userInputs = fetchFormInputs(
          document.querySelector("form.form-body")
        );
        let postData = Object.assign(defaults, userInputs);
        // console.log(postData);
        if (postData.MobilePhone) {
          postData.MobilePhone = postData.MobilePhone.replace(/^0{1}/, "");
        }

        fetch(getPostURL(), {
          method: "POST",
          body: Object.keys(postData).reduce((formData, k) => {
            formData.append(k, postData[k]);
            return formData;
          }, new FormData()),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log("response", response);

            hideFullPageLoading();
            changeToPage(2);

            if (response.Supporter) {
              sendPetitionTracking("2020-amazon_forest");
            }
          })
          .catch((error) => {
            hideFullPageLoading(); // something wrong
            alert(error);
            console.error(error);
          });
      } catch (e) {
        console.error(e);
      }
      return false;
    },
    invalidHandler: function (event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log(errors);
        $("div.error").show();
      } else {
        $("div.error").hide();
      }
    },
  });
});

// handle page changes
const changeToPage = (pageNo) => {
  console.log("changeToPage", pageNo);
  if (pageNo === 1) {
    $("#page-2").hide();
  } else if (pageNo === 2) {
    $("#page-1").hide();
    $("#page-2").show();

    let enc = document.querySelector("#page-2");
    let top = enc.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo(0, top);

    document.querySelectorAll(".signup-now").forEach((cta) => {
      cta.innerHTML = "支持我們";
    });
  } else {
    throw new Error("Unknown pageNo: " + pageNo);
  }
};

// init
document.addEventListener("DOMContentLoaded", function (event) {
  parallax();
  changeToPage(1);
  document
    .querySelector(".form-button--whatsapp")
    .addEventListener("click", whatsAppShare);
  document
    .querySelector(".form-button--share")
    .addEventListener("click", mainShare);
});
