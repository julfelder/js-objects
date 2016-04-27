var message ='';
var student;

function print(message) {
  document.write("<section>" + message + "</section>")
}

for(var i=0; i<students.length;i++) {
  student= students[i];
  message += '<h2>'+ student.name +'</h2>';
}

print(message);
