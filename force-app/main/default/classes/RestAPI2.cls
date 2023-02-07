@RestResource(urlMapping='/Managingcontact/*')
global class RestAPI2 {
    @HttpGet
    global static Case getconsumer(){
        RestRequest req  = RestContext.request;
        RestResponse res = RestContext.response;
        res.addHeader('Content-Type', 'application/json');
        String email;
        if(req.params.get('email') !=null)
        {
            email = req.params.get('email');
        }
        
        Case con =[select Contact.Name,Contact.Email,CaseNumber From Case Where Contact.Email='ganduanil123@gmail.com'];
        return con;
        
        
    }
       
    
}