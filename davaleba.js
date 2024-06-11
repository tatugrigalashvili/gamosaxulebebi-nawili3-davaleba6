var pattern = /[0-9]/;
var str = "1234567";
var result = pattern.test(str);

if (result) {
    document.write("<p style='color:green'>სწორია</p>");
} else {
    window.alert("არასწორია");
}
