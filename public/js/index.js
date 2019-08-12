var API = {
  saveSurvey: function (newUserInput) {
    return $.post("/api/survey", newUserInput)
      .then(data => {
        var id = data.id;
        window.location = `/personalData/${id}`
      })
  },
  getSurvey: function () {
    return $.ajax({
      url: "api/survey",
      type: "GET"
    });
  },
};

var menstruationTotal;
var pregnancyTotal;
var cosmeticsTotal;
var garmentTotal;
var totalExpense;
var incomePercentage;

function handleFormSubmit(event) {
  event.preventDefault();

  $("#cost-survey")[0].reportValidity()

  if ($("input:radio[name ='menstruationMonthly']:checked").val() === "true") {
    menstruationTotal = parseInt($("#menstruation").val().trim()) * 12
  } else {
    menstruationTotal = parseInt($("#menstruation").val().trim());
  };

  if ($("input:radio[name ='pregnancyMonthly']:checked").val() === "true") {
    pregnancyTotal = parseInt($("#pregnancy").val().trim()) * 12
  } else {
    pregnancyTotal = parseInt($("#pregnancy").val().trim());
  };

  if ($("input:radio[name ='cosmeticsMonthly']:checked").val() === "true") {
    cosmeticsTotal = parseInt($("#cosmetics").val().trim()) * 12
  } else {
    cosmeticsTotal = parseInt($("#cosmetics").val().trim());
  };

  if ($("input:radio[name ='garmentMonthly']:checked").val() === "true") {
    garmentTotal = parseInt($("#garment").val().trim()) * 12
  } else {
    garmentTotal = parseInt($("#garment").val().trim());
  };

  totalExpense = menstruationTotal + pregnancyTotal + cosmeticsTotal + garmentTotal;

  incomePercentage = parseFloat(totalExpense / parseInt($("#salary").val().trim()));

  var newUserInput = {
    name: $("#fullName").val().trim(),
    county: $("#county").val(),
    income: $("#salary").val().trim(),
    menstruation: menstruationTotal,
    menstruation_monthly: ($("input:radio[name ='menstruationMonthly']:checked").val() === "false") ? false : true,
    pregnancy: pregnancyTotal,
    pregnancy_monthly: ($("input:radio[name ='pregnancyMonthly']:checked").val() === "false") ? false : true,
    cosmetics: cosmeticsTotal,
    cosmetics_monthly: ($("input:radio[name ='cosmeticsMonthly']:checked").val() === "false") ? false : true,
    garments: garmentTotal,
    garments_monthly: ($("input:radio[name ='garmentMonthly']:checked").val() === "false") ? false : true,
    feedback: $("#feedbackText").val().trim(),
    totalExpense: totalExpense,
    incomePercentage: incomePercentage
  };

  API.saveSurvey(newUserInput).then(function () {});

  $("#fullName").val("");
  $("#county").val("");
  $("#salary").val("");
  $("#menstruation").val("");
  $("#pregnancy").val("");
  $("#cosmetics").val("");
  $("#garment").val("");
  $("#feedbackText").val("");
  $('#customRadio9').attr("checked", false);
  $('#customRadio7').attr("checked", false);
  $('#customRadio5').attr("checked", false);
  $('#customRadio3').attr("checked", false);
  $('#customRadio10').attr("checked", true);
  $('#customRadio8').attr("checked", true);
  $('#customRadio6').attr("checked", true);
  $('#customRadio4').attr("checked", true);

};

$(document).on("submit", "#cost-survey", handleFormSubmit);