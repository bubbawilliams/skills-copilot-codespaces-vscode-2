function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  if (memberValue == "1") {
    document.getElementById("skills").innerHTML = "Skills: HTML, CSS, JavaScript";
  } else if (memberValue == "2") {
    document.getElementById("skills").innerHTML = "Skills: HTML, CSS, JavaScript, PHP";
  } else if (memberValue == "3") {
    document.getElementById("skills").innerHTML = "Skills: HTML, CSS, JavaScript, PHP, MySQL";
  } else {
    document.getElementById("skills").innerHTML = "Skills: HTML, CSS, JavaScript, PHP, MySQL, Python";
  }
}