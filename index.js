window.onload = function() {
    // Target the input element by its ID
    const inputElement = document.getElementById('phoneNo');
    
    // Set the placeholder attribute to the desired value
    inputElement.placeholder = '+2348134588157';
};
function identifyProvider() {
    const phoneNumber = document.getElementById("phoneNo").value;
    // console.log(phoneNumber)
    const mtnRegex = /^\+?234[7-9][0,1][3,6][\d]{7}/;
    const mtnCheck = /^0[7-9][0-1][3,6][\d]{7}/;
    const airtelRegex = /^\+?234[7-9][0,1][2,8][\d]{7}/;
    const airtelCheck = /^0[7-9][0-1][2,8][\d]{7}/;
    const gloRegex = /^\+?234[7-9][0,1][5,7][\d]{7}/;
    const gloCheck = /^0[7-9][0-1][5,7][\d]{7}/;
    const etisalatRegex = /^\+?234[7-9][0,1][9][\d]{7}/;
    const etisalatCheck = /^0[7-9][0-1][9][\d]{7}/;

    if (mtnRegex.test(phoneNumber) || mtnCheck.test(phoneNumber)) {
      alert("This is an MTN line");
    } else if (
      airtelRegex.test(phoneNumber) ||
      airtelCheck.test(phoneNumber)
    ) {
      alert("This is an Airtel line");
    } else if (gloRegex.test(phoneNumber) || gloCheck.test(phoneNumber)) {
      alert("This is a Glo line");
    } else if (
      etisalatRegex.test(phoneNumber) ||
      etisalatCheck.test(phoneNumber)
    ) {
      alert("This is an Etisalat line");
    } else {
      alert("This phone number is not recognized");
    }
  }