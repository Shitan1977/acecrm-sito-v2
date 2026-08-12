$(document).ready(function () {

    $("#send_message").click(function (e) {

        e.preventDefault();

        let error = false;

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();

        $(".error_input").removeClass("error_input");

        if (name == "") {
            $("#name").addClass("error_input");
            error = true;
        }

        if (email == "" || email.indexOf("@") == -1) {
            $("#email").addClass("error_input");
            error = true;
        }

        if (phone == "") {
            $("#phone").addClass("error_input");
            error = true;
        }

        if (!error) {

            $("#send_message")
                .prop("disabled", true)
                .val("Sending...");

            $.post("booking.php", $("#booking_form").serialize(), function (result) {

                if ($.trim(result) == "sent") {

                    $("#booking_form").fadeOut(300, function () {
                        $("#success_message_col").fadeIn(500);
                    });

                } else {

                    $("#mail_fail").fadeIn(500);

                    $("#send_message")
                        .prop("disabled", false)
                        .val("Send The Message");
                }

            });

        }

    });

});