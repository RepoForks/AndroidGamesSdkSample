/*! Copyright 2014 Amazon Digital Services, Inc. All rights reserved. */
SocialServiceProxy=(function(){var a=function(){var b="https://ags-ext.amazon.com/services/social/";this["getMyFriends"]=function(){console.log("SocialServiceProxy: getMyFriends");var c=$.Deferred();var d={};NativeTransport.serviceCall({target:"SocialService",method:"getMyFriends",httpMethod:"PUT",endPoint:b,args:d}).always(function(f,e){console.log("getMyFriends complete: "+JSON.stringify(f));c.resolve(f,e)});return c.promise()}};return a}());console.log("SocialServiceProxy loaded.");