$(".click").click((event) => {
    var id = (event.target.getAttribute("id"));
    console.log(id)
  
        $(".contentContainer").addClass("hidden");
        $("#" + id  + "Container").removeClass("hidden");
    
  });

$(".list-group-item").click((event) => {
    var id = (event.target.getAttribute("id"));
    $("#mainNav").addClass("hidden")
    $("#crossRoadsContainer").addClass("hidden")
    $(".resturantContainer").removeClass("hidden")
    console.log(id)
})

$(".resturantName").click((event) => {
    $("#mainNav").removeClass("hidden")
    $("#crossRoadsContainer").removeClass("hidden")
    $(".resturantContainer").addClass("hidden")
})