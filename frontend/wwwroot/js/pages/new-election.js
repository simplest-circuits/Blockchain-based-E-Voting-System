$(function () {
  const select2 = $('.select2'),
    selectPicker = $('.selectpicker');

  // Bootstrap select
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  // select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
    });
  }

  // Initialize the stepper
  const stepper = new Stepper($('.bs-stepper')[0]);

  // Handle next and previous buttons
  $('.btn-next').on('click', function () {
    stepper.next();
  });

  $('.btn-prev').on('click', function () {
    stepper.previous();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    // Client-side validation
    const electionId = document.getElementById('electionId').value;
    const electionTitle = document.getElementById('electionTitle').value;
    const startTimestamp = new Date(document.getElementById('startTimestamp').value);
    const endTimestamp = new Date(document.getElementById('endTimestamp').value);
    const registrationDeadline = document.getElementById('registrationDeadline').value;
    const maxVotesPerUser = document.getElementById('maxVotesPerUser').value;
    const votingMethod = document.getElementById('votingMethod').value;
    const minimumEligibleAge = document.getElementById('minimumEligibleAge').value;
    const adminAddress = document.getElementById('adminAddress').value;
    const encryptionKey = document.getElementById('encryptionKey').value;
    const quorum = document.getElementById('quorum').value;
    const votingThreshold = document.getElementById('votingThreshold').value;
    const state = document.getElementById('state').value;
    const candidateList = document.getElementById('candidateList').value;
    const validElectoralDistricts = document.getElementById('validElectoralDistricts').value;

    const now = new Date();

    if (!electionId || !electionTitle || !startTimestamp || !endTimestamp || !registrationDeadline ||
        !maxVotesPerUser || !votingMethod || !minimumEligibleAge || !adminAddress || !encryptionKey ||
        !quorum || !votingThreshold || !state || !candidateList || !validElectoralDistricts) {
        event.preventDefault();
        alert('Please fill in all required fields.');
        return;
    }

    if (isNaN(startTimestamp.getTime()) || isNaN(endTimestamp.getTime())) {
        event.preventDefault();
        alert('Please enter valid start and end dates.');
        return;
    }

    if (startTimestamp < now) {
        event.preventDefault();
        alert('The start date and time cannot be in the past.');
        return;
    }

    if (endTimestamp < startTimestamp) {
        event.preventDefault();
        alert('The end date and time cannot be earlier than the start date and time.');
        return;
    }

    // Additional logic for dynamic lists can be added here
    console.log('Form submitted');
  });

  $('.btn-submit').on('click', function (event) {
    event.preventDefault();
    // Populate the summary modal with input values
    const summaryList = $('#summaryList');
    summaryList.empty(); // Clear previous summary

    const formData = {
        'Election ID': $('#electionId').val(),
        'Election Title': $('#electionTitle').val(),
        'Start Timestamp': $('#startTimestamp').val(),
        'End Timestamp': $('#endTimestamp').val(),
        'Registration Deadline': $('#registrationDeadline').val(),
        'Max Votes Per User': $('#maxVotesPerUser').val(),
        'Voting Method': $('#votingMethod').val(),
        'Minimum Eligible Age': $('#minimumEligibleAge').val(),
        'Admin Address': $('#adminAddress').val(),
        'Encryption Key': $('#encryptionKey').val(),
        'Quorum': $('#quorum').val(),
        'Voting Threshold': $('#votingThreshold').val(),
        'State': $('#state').val(),
        'Candidate List': $('#candidateList').val(),
        'Valid Electoral Districts': $('#validElectoralDistricts').val()
    };

    $.each(formData, function (key, value) {
        summaryList.append('<li class="list-group-item">' + key + ': ' + value + '</li>');
    });

    // Show the modal
    $('#summaryModal').modal('show');
  });

  $('#confirmSubmit').on('click', function () {
    // TODO: Add AJAX call or form submission logic here
    alert('Form submitted successfully!');
    $('#summaryModal').modal('hide');
  });
});

$(document).ready(function () {
    // Initialize DataTables
    var table = $('.datatables-candidates').DataTable();

    // Apply the search
    table.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that.search(this.value).draw();
            }
        });
    });

    // Handle row click
    $('table.table-striped tbody tr').on('click', function () {
        const electionId = $(this).find('td').eq(0).text();
        const electionTitle = $(this).find('td').eq(1).text();
        const electionDescription = $(this).find('td').eq(2).text();
        const startDate = $(this).find('td').eq(3).text();
        const endDate = $(this).find('td').eq(4).text();

        // Populate the modal with details
        const detailsList = $('#detailsList');
        detailsList.empty(); // Clear previous details
        detailsList.append('<li class="list-group-item">Election ID: ' + electionId + '</li>');
        detailsList.append('<li class="list-group-item">Title: ' + electionTitle + '</li>');
        detailsList.append('<li class="list-group-item">Description: ' + electionDescription + '</li>');
        detailsList.append('<li class="list-group-item">Start Date: ' + startDate + '</li>');
        detailsList.append('<li class="list-group-item">End Date: ' + endDate + '</li>');

        // Show the modal
        $('#detailsModal').modal('show');
    });
}); 