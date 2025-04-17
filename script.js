function doPost(e) {

  var sheet = SpreadsheetApp.openById("1ilwaI8PPjAzxQaoUTIJ7MoCprS-VjIwHoo649wJ7Qzs").getActiveSheet();
  var params = e.parameter;

  var newRow = [
    new Date(),
    params.email,
    params.language,
    params.message,
    params.interest,
    params.studyTime,
    params.status,
    params.topic,
    params.experience
  ];
  
  sheet.appendRow(newRow);

  var emailTo = "hayunjong83@gmail.com";  
  var subject = "과제 제출-20230939김하연";  
  var body = `이메일: ${"ddddns@naver.com"}\n이름: ${"김하연"}\n메시지: ${"안녕하세요"}`;  
  
  MailApp.sendEmail(emailTo, subject, body);
  

  return ContentService.createTextOutput("Success");

}