//E-mail Ajax Send
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "../PHP/mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Thank you, email send");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});