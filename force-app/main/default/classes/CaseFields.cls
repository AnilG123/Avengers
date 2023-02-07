@RestResource(urlMapping='/Casedatails/*')
global class CaseFields {
    @HttpGet
       global static List<Case> getConsumer()
    {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        res.addHeader('Content-Type', 'application/json');
        string email;
        if(req.params.get('email')!=null)
        {
            email=req.params.get('email');
        }
        Case[] CaseObj=[select Contact.Name,Contact.Email,CaseNumber,Origin From Case where Contact.Email='ganduanil123@gmail.com'];
        return CaseObj;
    }
}