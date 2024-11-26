
        const seats = document.querySelectorAll('.seat:not(.occupied)');
        const bookButton = document.getElementById('bookButton');
        const bookingTable = document.getElementById('bookingTable');
        const seatCountElement = document.getElementById('seatCount');
        const seatPriceElement = document.getElementById('seatPrice');
        const gstElement = document.getElementById('gst');
        const finalPriceElement = document.getElementById('finalPrice');

        const ticketPrice = 150; // Price per seat
        let selectedSeatsCount = 0;

        seats.forEach(seat => {
            seat.addEventListener('click', () => {
                seat.classList.toggle('selected');
            });
        });

        bookButton.addEventListener('click', () => {
            const selectedSeats = document.querySelectorAll('.seat.selected');
            selectedSeatsCount = selectedSeats.length;

            if (selectedSeatsCount === 0) {
                alert("Please select at least one seat.");
                return;
            }

            const totalPrice = selectedSeatsCount * ticketPrice;
            const gst = (totalPrice * 18) / 100;
            const finalPrice = totalPrice + gst;

            // Update table data
            seatCountElement.textContent = selectedSeatsCount;
            seatPriceElement.textContent = `₹${totalPrice}`;
            gstElement.textContent = `₹${gst.toFixed(2)}`;
            finalPriceElement.textContent = `₹${finalPrice.toFixed(2)}`;

            // Show booking table
            bookingTable.style.display = 'table';
        });

        $(document).ready(function(){
          $("#hide_btn").click(function(){
            $("#card_jqy").hide();

          });
          $("#show_btn").click(function(){
            $("#card_jqy").show();

          });

        });
    