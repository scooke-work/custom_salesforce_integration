public class test {

    public static void testing(){
        
        HttpRequest req = new HttpRequest();

        // Replace {{NamedCredentials}} with the name you chose during your Named Credential setup in Salesforce and replace {{AccountId}} with the account Id of the authenticated user
        // This endpoint will create a draft envelope in your account and can verify the creation from the DocuSign WebApp
        req.setEndpoint('callout:{{NamedCredential}}/restapi/v2.1/accounts/{{AccountId}}/envelopes'); 
        req.setHeader('Content-Type', 'application/json');
        req.setMethod('POST');
        String jsonBody = SYSTEM.JSON.serialize(new Map<String, Object> {'status' => 'created'});
        req.setBody(jsonBody);

        Http http = new Http();
        HTTPResponse res = http.send(req);
            
        String responseBody = res.getBody();
        System.debug(responseBody); 
                
        return res.getBody();
    }
}




