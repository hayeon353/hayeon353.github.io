function doPost(e) {

  var sheet = SpreadsheetApp.openById("1IyDaNv8zHmuRDq55ZRkW5JZoQPGcwMzgXE4pB7SidZU").getActiveSheet();
  var params = e.parameter;

  var newRow = [new Date(), params.email, params.name, params.message];

  sheet.appendRow(newRow);

  var emailTo = "hayunjong83@gmail.c";  
  var subject = "과제 제출-20230939김하연";  
  var body = `이메일: ${"ddddns@naver.com"}\n이름: ${"김하연"}\n메시지: ${"안녕하세요"}`;  
  
  MailApp.sendEmail(emailTo, subject, body);
  

  return ContentService.createTextOutput("Success");

}