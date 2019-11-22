/// <reference types="cypress" />

describe('MyPureApiPostTesting',function(){

    it('myLoginAPi',function(){
    
        
      cy.request('POST','http://albuatweb-278287743.ap-southeast-1.elb.amazonaws.com/web/reportservice/read.do',{
    "channel": "AdminPortal",
    "count": "15",
    "csValue": "684852246",
    "formData": "{}",
    "limit": "25",
    "loginExchangeKey": "ff8080816e645005016e87a6d7df0189",
    "page": "1",
    "pageNum": "1",
    "rndValue": "4ee2ef7ede9fcb3fdf8a0ce6d081161ac77cc9b52a0694790c92238397e39c8851213a8caa4cbf2896c3e82c0daee58252a00347d15ba378adb9ce291e0154431436f73145ede5eee1580c99f82ba5967ebcb98fd884eff6abba66cefef2b4b29021a2bfbb64c6d2467b761e10ee78606d66f179d277de25a7297912b40961ead9032da006d445860b1b47f7f77c664825e5d3ba4b1cdfe94a44a74a2043b22755abd05d039063256efb0bdc672f9e6c718ea7c40f348975e1df9f94d1046bc87f96e5eeb950345075f3a8ff5f632c46770214e9e7d4cbdce7e0ca2bfa66ffb4d771de8b620da8aa9cdf8599f171b0839e1bb6d7a89c274f088553a06a537a8f",
    "screenName": "Reports",
    "start": "0",
    "tenantCode": "vpdirect"
        }).then(function(response){
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("success")
        })
    
     })
    
    })