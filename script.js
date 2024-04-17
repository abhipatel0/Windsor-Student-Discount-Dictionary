// Script for get directions

document.addEventListener('DOMContentLoaded', function () {
    function setDestination() {
        var destination = document.querySelector('.store-name').textContent;
        document.querySelector('.daddr').value = destination;
    }

    document.querySelector('.directionForm').addEventListener('submit', setDestination);
});
