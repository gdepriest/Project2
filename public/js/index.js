// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveSurvey: function(newUserInput) {
    return $.post("/api/survey", newUserInput)
    .then(data=>{
      console.log(data)
      window.location = "/results"
    })
  },
  getSurvey: function() {
    return $.ajax({
      url: "api/survey",
      type: "GET"
    });
  },
  deleteSurvey: function(id) {
    return $.ajax({
      url: "api/survey/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  // make sure all require filled are filled in
  $("#cost-survey")[0].reportValidity()

  event.preventDefault();

  var newUserInput = {
    name: $("#fullName").val().trim(),
    county: $("#county").val(),
    income: $("#salary").val().trim(),
    menstruation: $("#menstruation").val().trim(),
    menstruation_monthly: ($("input:radio[name ='menstruationMonthly']:checked").val() === "false")? false : true,
    pregnancy: $("#pregnancy").val().trim(),
    pregnancy_monthly: ($("input:radio[name ='pregnancyMonthly']:checked").val() === "false" )? false : true,
    cosmetics: $("#cosmetics").val().trim(),
    cosmetics_monthly: ($("input:radio[name ='cosmeticsMonthly']:checked").val() === "false")? false : true,
    garments: $("#garment").val().trim(),
    garments_monthly: ($("input:radio[name ='garmentMonthly']:checked").val() === "false")? false : true ,
    feedback: $("#feedbackText").val().trim()
  };


  API.saveSurvey(newUserInput).then(function() {
    refreshExamples();
  });

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

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};



// Add event listeners to the submit and delete buttons

$("#submit").on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
