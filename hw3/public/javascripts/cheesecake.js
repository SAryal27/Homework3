//Shubu Aryal

$(document).ready(function () {
    // Populate the month dropdown
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthList = $("#month-list");
    const selectedMonth = $("#selected-month");

    months.forEach(month => {
        let monthOption = $("<a>").text(month).attr("href", "#").click(function() {
            selectedMonth.text(month); // Update the displayed month
        });
        monthList.append(monthOption);
    });

    // Form Submission Handling
    $("#submitButton").click(function(event) {
        event.preventDefault();

        const notes = $("#notes").val().toLowerCase();
        const quantity = $("#quantity").val();
        const topping = $('input[name="topping"]:checked').val();

    // Validate vegan warning
        if (notes.includes('vegan')) {
            alert("Warning! Cheesecakes contain dairy.");
            return;
        }

    // Ensure a topping is selected
        if (!topping) {
            alert("Please select a topping.");
            return;
        }

    // Replace order form with confirmation message
    $("#orderForm").html(`
    <h2>Thank you! Your order has been placed.</h2>
    <p><strong>Topping:</strong> ${topping}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Notes:</strong> ${notes || "None"}</p>
        `);
    });
});
        