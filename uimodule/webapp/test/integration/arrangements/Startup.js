sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.santiago.chatbot.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.santiago.chatbot",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
