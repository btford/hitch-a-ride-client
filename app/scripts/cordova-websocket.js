/*
 * Copyright 2012 Claude Mamo
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/*
 * Copyright (c) 2010 Animesh Kumar  (https://github.com/anismiles)
 * Copyright (c) 2010 Strumsoft  (https://strumsoft.com)
 *  
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *  
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *  
 */
(function () {

    var global = window;
    var self

    var WebSocket = global.WebSocket = function (url) {

        self = this

        self.id = Cordova.exec(null,
            null,
            'WebSocket',
            'create',
            [ url ]);

        WebSocket.store[self.id] = this

        Cordova.exec(null,
            null,
            'WebSocket',
            'connect',
            [self.id]);
    };

    // storage to hold websocket object for later invokation of event methods
    WebSocket.store = {};

    // static event methods to call event methods on target websocket objects
    WebSocket.onmessage = function (evt) {
        console.debug(self.id)
        WebSocket.store[evt._target]['onmessage'].call(global, evt);
    }

    WebSocket.onopen = function (evt) {
        WebSocket.store[evt._target]['onopen'].call(global, evt);
    }

    WebSocket.onclose = function (evt) {
        WebSocket.store[evt._target]['onclose'].call(global, evt);
    }

    WebSocket.onerror = function (evt) {
        WebSocket.store[evt._target]['onerror'].call(global, evt);
    }

    // instance event methods
    WebSocket.prototype.send = function (data) {
        Cordova.exec(null,
            null,
            'WebSocket',
            'send',
            [ self.id, data ]);
    }

    WebSocket.prototype.close = function () {
        Cordova.exec(null,
            null,
            'WebSocket',
            'close',
            [ self.id ]);

    }

    WebSocket.prototype.getReadyState = function () {
        return Cordova.exec(null,
            null,
            'WebSocket',
            'getReadyState',
            [self.id]);
    }

    ///////////// Must be overloaded
    WebSocket.prototype.onopen = function () {
        throw new Error('onopen not implemented.');
    };

    // alerts message pushed from server
    WebSocket.prototype.onmessage = function (msg) {
        throw new Error('onmessage not implemented.');
    };

    // alerts message pushed from server
    WebSocket.prototype.onerror = function (msg) {
        throw new Error('onerror not implemented.');
    };

    // alert close event
    WebSocket.prototype.onclose = function () {
        throw new Error('onclose not implemented.');
    };
})();