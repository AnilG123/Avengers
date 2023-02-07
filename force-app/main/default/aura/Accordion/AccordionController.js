({
    handleClick: function (cmp, event) {
        cmp.set("v.section", "A");
    },

    handleSectionToggle: function (cmp, event) {
        var openSections = event.getParam('openSections');
    },
    handleClickB: function (cmp, event) {
        cmp.set("v.section", "B");
    },
    handleClickC: function (cmp, event) {
        cmp.set("v.section", "C");
    },
    
})