/*! Copyright 2014 Amazon Digital Services, Inc. All rights reserved. */
UserExperienceServiceProxy=(function(){var a=function(){var c="https://ags-ext.amazon.com/services/ux/v1/";var b=1;this["getMyFriendProfiles"]=function(f){console.log("UserExperienceServiceProxy: getMyFriendProfiles");var d=$.Deferred();var e=[{type:"MyFriendProfiles",version:b,playerIds:f}];e=JSON.stringify(e);NativeTransport.serviceCall({target:"UserExperiencesService",method:"getQueryData",httpMethod:"POST",allowCallInGuestMode:false,endPoint:c,httpPayload:e}).always(function(h,g){console.log("UserExperienceServiceProxy: getMyFriendProfiles complete: "+JSON.stringify(h));d.resolve(h,g)});return d.promise()};this["getTimePlayedXPCheckpoints"]=function(e){console.log("UserExperienceServiceProxy: getTimePlayedXPCheckpoints");var d=$.Deferred();var f=[{type:"TimePlayedXpCheckpoints",version:b,packageName:e}];f=JSON.stringify(f);NativeTransport.serviceCall({target:"UserExperiencesService",method:"getQueryData",httpMethod:"POST",allowCallInGuestMode:true,endPoint:c,httpPayload:f}).always(function(h,g){console.log("UserExperienceServiceProxy: getTimePlayedXPCheckpoints complete: "+JSON.stringify(h));d.resolve(h,g)});return d.promise()}};return a}());console.log("UserExperienceServiceProxy loaded.");