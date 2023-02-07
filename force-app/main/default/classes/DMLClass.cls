public class DMLClass {
    Public static void methodDML(){
        Contact Record = new Contact();
        Record.LastName ='Ram';
        Insert Record;
        
        
        Contact stuobj = [select id, Title , Department,Birthdate from Contact  where id='0035g00000nmKxPAAU'];
        stuobj.Title = 'Ram';
        stuobj.Department = 'Developer';
        
        Update stuobj;
        
        Contact Stuobj2 = [select id from Contact where id ='0035g00000nmKxPAAU'];
        Delete Stuobj2;
        
    }
    
    
}