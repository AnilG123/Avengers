@RestResource(urlMapping='/getContact/*')
global class ContactDetails {
    @HttpGet
    global static Contact getCustomer()
    {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        Contact[] conObj =[Select ID,firstname,lastname,email from Contact];
        return conObj[2];
    }
    

}