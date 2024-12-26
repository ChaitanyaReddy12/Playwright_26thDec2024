
Feature: playwright Login Functionality

   Background: Launch Application
      Given i launch the browser
      
   Scenario: verify scenario using Background keyword
      Given i launch the application OrangeHRM
      And i provide the credentails   

   Scenario Outline: verify login with different credentials
      And Enter the username as "<username>"
      And Enter the password as "<password>"
      And i close the application

      Examples:
      | username   | password | 
      | Admin      | admin123 | 
      | RamaKanth  | 123456   | 
      | Livetech   | Testing  |