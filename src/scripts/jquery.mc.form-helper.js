const { $ } = window;
$.validator.messages.required = "必填欄位";

$.validator.addMethod(
  "validate-name",
  (value, element) => {
    return new RegExp(/^[\u4e00-\u9fa5_a-zA-Z_ ]{1,40}$/i).test(value);
  },
  "請不要輸入數字或符號"
);

//override email with django email validator regex - fringe cases: "user@admin.state.in..us" or "name@website.a"
$.validator.addMethod(
  "email",
  (value, element) => {
    if (value) {
      return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(
        value
      );
    }

    return true;
  },
  "電郵地址格式錯誤"
);

$.validator.addMethod(
  "phone",
  (value, element) => {
    const phoneReg8 = new RegExp(/^(10001000|[2-9]{1}[0-9]{7})$/).test(value);

    if (value) {
      return phoneReg8;
    }
    return true;
  },
  "電話格式不正確，請輸入8位數字電話號碼"
);

$.validator.addMethod(
  "taiwan-phone",
  (value, element) => {
    const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(value);
    const phoneReg7 = new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(
      value
    );

    if (value) {
      return phoneReg6 || phoneReg7;
    }
    return true;
  },
  "電話格式不正確，請只輸入數字 0912345678 和 02-23612351"
);

$.validator.addMethod(
  "taiwan-phone",
  (value, element) => {
    const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(value);
    const phoneReg7 = new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(
      value
    );

    if (value) {
      return phoneReg6 || phoneReg7;
    }
    return true;
  },
  "電話格式不正確，請只輸入數字 0912345678 和 02-23612351"
);

$.validator.addClassRules({
  // connect it to a css class
  email: { email: true },
  phone: { phone: true },
  "taiwan-phone": { "taiwan-phone": true },
});

/**
 * Collect all the input values inside the form
 * @param  {DOM} form Native js Element (not in jquery form)
 * @return {Object} {name:value, ...}
 */
export const fetchFormInputs = (form) => {
  let obj = {};
  form.querySelectorAll("input").forEach(function (el, idx) {
    let v = null;

    if (el.type === "checkbox") {
      v = el.checked;
    } else {
      v = el.value;
    }

    obj[el.name] = v;
  });
  form.querySelectorAll("select").forEach(function (el, idx) {
    obj[el.name] = el.options[el.selectedIndex].value;
  });

  return obj;
};

/**
 * Retrieve the form POST URL
 * @return {string} URL
 */
export const getPostURL = () => {
  return document.querySelector("#mc-form").action;
};

/**
 * Retrieve the current number of supporters and signup targets
 * @return {object} {numSignup:int, numSignupTarget:int}
 */
export const getNumSignupsAndTarget = () => {
  var numSignupTarget =
      parseInt(
        document.querySelector('input[name="numSignupTarget"]').value,
        10
      ) || 0,
    numResponses =
      parseInt(
        document.querySelector('input[name="numResponses"]').value,
        10
      ) || 0;

  return {
    numSignupTarget,
    numSignup: numResponses,
  };
};

/**
 * Display the full loading screen
 *
 * Remember to add the following style to your page:
 */

export const showFullPageLoading = () => {
  if (!document.querySelector("#page-loading")) {
    document.querySelector("body").insertAdjacentHTML(
      "beforeend",
      `
			<div id="page-loading" class="hide">
			  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>`
    );
  }

  setTimeout(() => {
    // to enable the transition
    document.querySelector("#page-loading").classList.remove("hide");
  }, 0);
};

/**
 * Hide the full page loading
 */
export const hideFullPageLoading = () => {
  document.querySelector("#page-loading").classList.add("hide");

  setTimeout(() => {
    document.querySelector("#page-loading").remove();
  }, 1500);
};

/**
 * Send the tracking event to the ga
 * @param  {string} eventLabel The ga trakcing name, normally it will be the short campaign name. ex 2019-plastic_retailer
 * @param  {[type]} eventValue Could be empty
 * @return {[type]}            [description]
 */
export const sendPetitionTracking = (eventLabel, eventValue) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "gaEvent",
    eventCategory: "petitions",
    eventAction: "signup",
    eventLabel: eventLabel,
    eventValue: eventValue,
  });

  window.dataLayer.push({
    event: "fbqEvent",
    contentName: eventLabel,
    contentCategory: "Petition Signup",
  });
};

/**
 * We provide two helper class to quickly switch the block show/hide
 * in the dd page: `is-hidden-at-dd-page-only`, `is-shown-at-dd-page-only`
 *
 * This function use the current url to distinguish the dd page.
 * The dd page should have url like this: xxx?utm_source=dd
 */

$(() => {
  document.querySelector(
    "#copyright-year"
  ).innerHTML = new Date().getFullYear();
  // if dd
  if (window.location.href.indexOf("utm_source=dd") >= 0) {
    let style = document.createElement("style");
    style.innerHTML = `.is-hidden-at-dd-page-only {
				display: none !important;
			}
			.is-shown-at-dd-page-only {
				display: block !important;
			}`;
    document.head.appendChild(style);
    //
    $("#MobilePhone").removeAttr("required");
  } else {
    // not in the dd page
    let style = document.createElement("style");
    style.innerHTML = `
			.is-shown-at-dd-page-only {
				display: none !important;
			}`;
    document.head.appendChild(style);
  }
});
