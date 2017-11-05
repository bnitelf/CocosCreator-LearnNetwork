cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        player_id: 1
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    // Call web service create player
    onCreate: function() {
        var request = cc.loader.getXMLHttpRequest();
        var self = this;

        var formData = new FormData();
        formData.append("player_name", "Cocos Creator Yeh");

        request.onreadystatechange = function () { 
            // if request done & status code is not error code. 
            if (request.readyState == XMLHttpRequest.DONE && (request.status >= 200 && request.status < 400)) { 
                var response = request.responseText; 
                console.log(response);
                self.label.string = "See console for result.";
            }
        };

        request.open("POST", "http://localhost/gamewebservice/player.php?action=create");
        request.send(formData);

        this.label.string = "Sending create...";
    },

    // Call web service get player
    onGet: function() {
        var request = cc.loader.getXMLHttpRequest();
        var self = this;

        request.onreadystatechange = function () { 
            // if request done & status code is not error code. 
            if (request.readyState == XMLHttpRequest.DONE && (request.status >= 200 && request.status < 400)) { 
                var response = request.responseText; 
                console.log(response);
                self.label.string = "See console for result.";
            }
        };

        request.open("GET", "http://localhost/gamewebservice/player.php?action=get&player_id=" + this.player_id);
        request.send();
        
        this.label.string = "Sending get player_id = " + this.player_id + " ...";
    },

    // Call web service update player
    onUpdate: function() {
        var request = cc.loader.getXMLHttpRequest();
        var self = this;

        var formData = new FormData();
        formData.append("player_id", this.player_id);
        formData.append("player_name", "I've updated name");
        formData.append("gold", 999);
        formData.append("level", 20);

        request.onreadystatechange = function () { 
            // if request done & status code is not error code. 
            if (request.readyState == XMLHttpRequest.DONE && (request.status >= 200 && request.status < 400)) { 
                var response = request.responseText; 
                console.log(response);
                self.label.string = "See console for result.";
            }
        };

        request.open("POST", "http://localhost/gamewebservice/player.php?action=update");
        request.send(formData);
        
        this.label.string = "Sending update...";
    },

    // Call web service delete player
    onDelete: function() {
        var request = cc.loader.getXMLHttpRequest();
        var self = this;

        var formData = new FormData();
        formData.append("player_id", this.player_id);

        request.onreadystatechange = function () { 
            // if request done & status code is not error code. 
            if (request.readyState == XMLHttpRequest.DONE && (request.status >= 200 && request.status < 400)) { 
                var response = request.responseText; 
                console.log(response);
                self.label.string = "See console for result.";
            }
        };

        request.open("POST", "http://localhost/gamewebservice/player.php?action=delete");
        request.send(formData);
        
        this.label.string = "Sending delete...";
    }
});
