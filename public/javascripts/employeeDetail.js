// Redirect to the update employee route when Edit is clicked
document.getElementById('editBtn').addEventListener('click', function () {
    const empId = this.getAttribute('data-id');
    window.location.href = '/employees/update/' + empId;
});

document.getElementById('deleteBtn').addEventListener('click', function () {
    const empId = this.getAttribute('data-id');
    alert('Delete feature coming soon!\nEmployee ID: ' + empId);
});