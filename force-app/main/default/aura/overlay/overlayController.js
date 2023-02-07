({
	createModal : function(component, event, helper) {
        component.find('overLayLib').showCustomModal({
            header: "Application Confirmation",
            body: 'This is test',
            footer:'Footer',
            showCloseButton: true,
            closeCallback: function(){
                alert('you closed the alert!');
            }
        });
		
	}
})