/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //alert('index is running');

        document.body.style.backgroundImage = "url('img/contacts.png')";
        document.body.style.backgroundSize = 'cover';
        document.getElementById('detailPage').style.visibility = 'hidden';
        document.getElementById('pinPage').style.visibility = 'hidden';

        //document.body.style.background-size
        //document.body.style.backgroundSize = "100% 100%";
        app.receivedEvent('deviceready');
    },
};

var contactPage = 'contactPage',
    detailPage = 'detailPage',
    pinPage = 'pinPage',
    contactImg = 'url(img/contacts.png)',
    detailImg = 'url(img/detail.png)',
    pinImg = 'url(img/pin.png)',
    settingsPage = 'settingsPage',
    settingImg = 'url(img/settings.png)';

var prevPage;

function swapElems(elemToHide, elemToShow, img) {
    document.body.style.backgroundImage = img;
    document.body.style.backgroundSize = 'cover';
    document.getElementById(elemToHide).style.transition = 'background-image 1s ease-in-out';
    document.getElementById(elemToShow).style.transition = 'background-image 1s ease-in-out';
    document.getElementById(elemToHide).style.visibility = 'hidden';
    document.getElementById(elemToShow).style.visibility = 'visible';
}

function detailClick() {
    swapElems(contactPage, detailPage, detailImg);
}

function backClickFromHome() {
    swapElems(detailPage, contactPage, contactImg);
}

function toSettings(currentPage) {
    if (currentPage === contactPage) {
        prevPage = 0;
    } else {
        prevPage = 1;
    }
    swapElems(currentPage, settingsPage, settingImg);
}

function backFromSettings() {
    if(prevPage == 0) {
        swapElems(settingsPage, contactPage, contactImg);
    } else {
        swapElems(settingsPage, detailPage, detailImg);
    }
}

 function call(){
                window.open("tel:+9723334563", "_system"); // or if _system doesnt work
                window.open("tel:+9723334563", "_blank");
            }





