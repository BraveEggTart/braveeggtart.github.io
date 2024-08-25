import{_ as i,o as a,c as e,a as r}from"./app.d92926d0.js";var l="/img/in-post/Evalution1.png",h="/img/in-post/Evalution2.png",d="/img/in-post/Evalution3.png",n="/img/in-post/Evalution4.png",t="/img/in-post/Evalution5.png",s="/img/in-post/Evalution6.png",c="/img/in-post/Evalution7.png",u="/img/in-post/Evalution8.png",o="/img/in-post/Evalution9.png";const p={},f=r('<p>\u968F\u7740\u4E92\u8054\u7F51\u884C\u4E1A\u7684\u5FEB\u901F\u53D1\u5C55\uFF0C\u4E92\u8054\u7F51\u516C\u53F8\u7684\u6280\u672F\u67B6\u6784\u4E5F\u5728\u4E0D\u65AD\u6F14\u5316\u548C\u5B8C\u5584\u3002\u4ECE\u6700\u521D\u7684\u5355\u4F53\u5E94\u7528\u5230\u5982\u4ECA\u7684\u5FAE\u670D\u52A1\u67B6\u6784\uFF0C\u9010\u6B65\u89E3\u6790\u6BCF\u4E2A\u9636\u6BB5\u6240\u9762\u4E34\u7684\u95EE\u9898\u4EE5\u53CA\u5982\u4F55\u6210\u529F\u8FC7\u6E21\u5230\u4E0B\u4E00\u4E2A\u9636\u6BB5\u3002</p><h2 id="\u5355\u4F53\u67B6\u6784-monolithic-architecture" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F53\u67B6\u6784-monolithic-architecture" aria-hidden="true">#</a> \u5355\u4F53\u67B6\u6784 Monolithic Architecture</h2><p>\u521D\u59CB\u9636\u6BB5\uFF0C\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u88AB\u6784\u5EFA\u4E3A\u4E00\u4E2A\u5355\u4E00\u7684\u3001\u7D27\u5BC6\u8026\u5408\u7684\u5355\u4F53\u5E94\u7528\uFF0C\u6240\u6709\u529F\u80FD\u6A21\u5757\u90FD\u90E8\u7F72\u5728\u540C\u4E00\u4E2A\u4EE3\u7801\u5E93\u4E2D\u3002 \u5F00\u53D1\u7B80\u5355\u3001\u90E8\u7F72\u65B9\u4FBF\uFF0C\u4F46\u968F\u7740\u4E1A\u52A1\u53D1\u5C55\u548C\u89C4\u6A21\u6269\u5927\uFF0C\u5355\u4F53\u67B6\u6784\u9762\u4E34\u7740\u53EF\u7EF4\u62A4\u6027\u5DEE\u3001\u6269\u5C55\u6027\u6709\u9650\u3001\u90E8\u7F72\u590D\u6742\u7B49\u95EE\u9898\u3002</p><h3 id="\u81EA\u8EAB\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8EAB\u4F18\u52BF" aria-hidden="true">#</a> \u81EA\u8EAB\u4F18\u52BF</h3><ul><li>\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u88AB\u6784\u5EFA\u4E3A\u4E00\u4E2A\u5355\u4E00\u7684\u3001\u7D27\u5BC6\u8026\u5408\u7684\u5355\u4F53\u5E94\u7528\uFF0C\u6240\u6709\u529F\u80FD\u6A21\u5757\u90FD\u90E8\u7F72\u5728\u540C\u4E00\u4E2A\u4EE3\u7801\u5E93\u4E2D\u3002</li><li>\u5F00\u53D1\u7B80\u5355\u3001\u90E8\u7F72\u65B9\u4FBF\uFF0C\u9002\u5408\u4E1A\u52A1\u53D1\u5C55\u521D\u671F\uFF0C\u5FEB\u901F\u6EE1\u8DB3\u5BA2\u6237\u9700\u6C42\uFF0C\u9A8C\u8BC1\u4E1A\u52A1\u6982\u5FF5\uFF0C\u63A8\u51FA\u8FED\u4EE3\u4EA7\u54C1</li></ul><h3 id="\u9762\u4E34\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u4E34\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9762\u4E34\u7684\u95EE\u9898</h3><ul><li>\u53EF\u6269\u5C55\u6027\u5DEE\uFF1A\u5355\u4F53\u5E94\u7528\u7684\u67B6\u6784\u5F80\u5F80\u96BE\u4EE5\u6C34\u5E73\u6269\u5C55\uFF0C\u968F\u7740\u7528\u6237\u91CF\u7684\u589E\u52A0\uFF0C\u5355\u4F53\u5E94\u7528\u53EF\u80FD\u65E0\u6CD5\u6EE1\u8DB3\u6027\u80FD\u9700\u6C42\u3002</li><li>\u8026\u5408\u5EA6\u9AD8\uFF1A\u5355\u4F53\u5E94\u7528\u4E2D\u5404\u6A21\u5757\u4E4B\u95F4\u901A\u5E38\u7D27\u5BC6\u8026\u5408\uFF0C\u4E00\u5904\u4FEE\u6539\u53EF\u80FD\u5BFC\u81F4\u6574\u4E2A\u5E94\u7528\u7684\u91CD\u65B0\u90E8\u7F72\uFF0C\u7275\u4E00\u53D1\u52A8\u5168\u8EAB\u3002</li><li>\u6280\u672F\u9009\u578B\u53D7\u9650\uFF1A\u5355\u4F53\u5E94\u7528\u5F80\u5F80\u4F7F\u7528\u540C\u4E00\u79CD\u6280\u672F\u6808\uFF0C\u96BE\u4EE5\u7075\u6D3B\u9009\u62E9\u6700\u9002\u5408\u7684\u6280\u672F\u89E3\u51B3\u65B9\u6848\u3002</li></ul><h3 id="\u90E8\u7F72\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u65B9\u5F0F" aria-hidden="true">#</a> \u90E8\u7F72\u65B9\u5F0F</h3><h4 id="\u5355\u4F53\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F53\u90E8\u7F72" aria-hidden="true">#</a> \u5355\u4F53\u90E8\u7F72</h4><p><img src="'+l+'" alt="All in One 1"></p><ul><li>\u5C40\u9650\u6027: <ul><li>\u53D1\u7248\u65F6\u670D\u52A1\u4F1A\u6682\u505C</li><li>\u5E76\u53D1\u91CF\u5927\u7684\u65F6\u5019\u4F1A\u5927\u91CF\u8D85\u65F6</li></ul></li></ul><h4 id="\u4F18\u5316\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316\u65B9\u6848" aria-hidden="true">#</a> \u4F18\u5316\u65B9\u6848</h4><ul><li>\u5F15\u5165Nginx\u505A\u53CD\u5411\u4EE3\u7406\uFF0C\u89E3\u51B3\u53D1\u7248\u65F6\u6682\u505C\u670D\u52A1\u7684\u95EE\u9898</li><li>\u5F15\u5165Redis\u505A\u6570\u636E\u7F13\u5B58\uFF0C\u63D0\u9AD8\u8BF7\u6C42\u5904\u7406\u80FD\u529B</li></ul><p><img src="'+h+'" alt="All in One 2"></p><ul><li>\u5C40\u9650\u6027: <ul><li>\u7A33\u5B9A\u6027\u5BB9\u6613\u53D7\u5230\u5355\u70B9\u6545\u969C\u7684\u5F71\u54CD</li><li>\u5B58\u5728\u5927\u91CF\u91CD\u590D\u4EE3\u7801\uFF0C\u8026\u5408\u6027\u4E25\u91CD</li><li>\u7CFB\u7EDF\u53D8\u5F97\u5E9E\u5927\u590D\u6742\uFF0C\u96BE\u4EE5\u7EF4\u62A4\u548C\u66F4\u65B0\uFF0C\u6269\u5C55\u6027\u53D7\u9650</li><li>\u6240\u6709\u529F\u80FD\u6A21\u5757\u90FD\u6253\u5305\u5728\u4E00\u8D77\uFF0C\u67D0\u4E9B\u529F\u80FD\u53EF\u80FD\u9700\u8981\u66F4\u591A\u8D44\u6E90\uFF0C\u800C\u5176\u4ED6\u529F\u80FD\u5374\u6D6A\u8D39\u8D44\u6E90\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8D44\u6E90\u5229\u7528\u7387\u4F4E\u4E0B\u3002</li></ul></li></ul><h2 id="\u670D\u52A1\u5316\u67B6\u6784-service-oriented-architecture" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5316\u67B6\u6784-service-oriented-architecture" aria-hidden="true">#</a> \u670D\u52A1\u5316\u67B6\u6784 Service-Oriented Architecture</h2><p>\u4E3A\u4E86\u89E3\u51B3\u5355\u4F53\u67B6\u6784\u7684\u95EE\u9898\uFF0C\u516C\u53F8\u5F00\u59CB\u5C06\u5355\u4F53\u5E94\u7528\u62C6\u5206\u4E3A\u591A\u4E2A\u72EC\u7ACB\u7684\u670D\u52A1\uFF0C\u6BCF\u4E2A\u670D\u52A1\u8D1F\u8D23\u4E00\u4E2A\u7279\u5B9A\u7684\u4E1A\u52A1\u529F\u80FD\u3002 \u670D\u52A1\u4E4B\u95F4\u901A\u8FC7\u8FDC\u7A0B\u8C03\u7528\u6216\u6D88\u606F\u961F\u5217\u8FDB\u884C\u901A\u4FE1\uFF0C\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u7075\u6D3B\u6027\u548C\u53EF\u6269\u5C55\u6027\uFF0C\u4F46\u4E5F\u5F15\u5165\u4E86\u4E00\u4E9B\u65B0\u7684\u6311\u6218\uFF0C\u5982\u670D\u52A1\u95F4\u901A\u4FE1\u590D\u6742\u5EA6\u589E\u52A0\u3001\u670D\u52A1\u6CBB\u7406\u7B49\u95EE\u9898\u3002</p><h3 id="\u81EA\u8EAB\u4F18\u52BF-1" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8EAB\u4F18\u52BF-1" aria-hidden="true">#</a> \u81EA\u8EAB\u4F18\u52BF</h3><ul><li>\u670D\u52A1\u4E4B\u95F4\u7684\u72EC\u7ACB\u6027\u548C\u677E\u8026\u5408\u6027\uFF0C\u4F7F\u5F97\u7CFB\u7EDF\u66F4\u5BB9\u6613\u6269\u5C55\u3001\u7EF4\u62A4\u548C\u5347\u7EA7\u3002</li><li>\u670D\u52A1\u662F\u72EC\u7ACB\u7684\u529F\u80FD\u5355\u5143\uFF0C\u53EF\u4EE5\u88AB\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\u5171\u4EAB\u548C\u91CD\u7528\uFF0C\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u590D\u7528\u7387\u3002</li><li>\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u5BF9\u670D\u52A1\u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72\u3001\u6269\u5C55\u548C\u66F4\u65B0\uFF0C\u7CFB\u7EDF\u66F4\u52A0\u7075\u6D3B\u548C\u53EF\u7EF4\u62A4\u3002</li><li>\u4E0D\u540C\u7684\u670D\u52A1\u53EF\u4EE5\u7EC4\u5408\u5728\u4E00\u8D77\u521B\u5EFA\u65B0\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B9E\u73B0\u66F4\u591A\u6837\u5316\u7684\u529F\u80FD\u548C\u4E1A\u52A1\u6D41\u7A0B\u3002</li><li>\u652F\u6301\u4E0D\u540C\u5E73\u53F0\u3001\u7F16\u7A0B\u8BED\u8A00\u548C\u6280\u672F\u4E4B\u95F4\u7684\u4E92\u64CD\u4F5C\u6027\uFF0C\u4F7F\u5F97\u7CFB\u7EDF\u66F4\u5177\u7075\u6D3B\u6027\u548C\u53EF\u6269\u5C55\u6027\u3002</li></ul><h3 id="\u9762\u4E34\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u4E34\u95EE\u9898" aria-hidden="true">#</a> \u9762\u4E34\u95EE\u9898</h3><ul><li>\u9AD8\u95E8\u69DB\uFF0C\u5F88\u591A\u670D\u52A1\u53EF\u80FD\u5BFC\u81F4\u901A\u4FE1\u7684\u534F\u8BAE\u65E0\u6CD5\u8FDB\u884C\u7EDF\u4E00</li><li>\u4E0D\u9002\u5408\u4E91\u73AF\u5883\uFF0C\u4E0D\u540C\u7684\u534F\u8BAE\u5BFC\u81F4\u7684\u4E0A\u7EBF\u4EE5\u53CA\u96C6\u6210\u90FD\u4E0D\u4E00\u81F4\u5BFC\u81F4\u7684\u90E8\u7F72\u901A\u4FE1\u7684\u95EE\u9898</li><li>\u7CFB\u7EDF\u53D8\u5F97\u590D\u6742\uFF0C\u589E\u52A0\u4E86\u5F00\u53D1\u3001\u90E8\u7F72\u548C\u7BA1\u7406\u7684\u96BE\u5EA6</li><li>\u5728\u8DE8\u591A\u4E2A\u670D\u52A1\u7684\u4E1A\u52A1\u6D41\u7A0B\u4E2D\uFF0C\u4E8B\u52A1\u7BA1\u7406\u53EF\u80FD\u4F1A\u53D8\u5F97\u590D\u6742\uFF0C\u9700\u8981\u8003\u8651\u5206\u5E03\u5F0F\u4E8B\u52A1\u5904\u7406\u7684\u673A\u5236</li><li>\u7531\u4E8E\u7CFB\u7EDF\u7684\u590D\u6742\u6027\uFF0C\u76D1\u63A7\u548C\u8C03\u8BD5\u53EF\u80FD\u4F1A\u53D8\u5F97\u56F0\u96BE\uFF0C\u9700\u8981\u5EFA\u7ACB\u6709\u6548\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u7CFB\u7EDF\u6765\u8FFD\u8E2A\u95EE\u9898</li></ul><h3 id="\u90E8\u7F72\u65B9\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u65B9\u5F0F-1" aria-hidden="true">#</a> \u90E8\u7F72\u65B9\u5F0F</h3><h4 id="rpc\u67B6\u6784-remote-procedure-call" tabindex="-1"><a class="header-anchor" href="#rpc\u67B6\u6784-remote-procedure-call" aria-hidden="true">#</a> RPC\u67B6\u6784 Remote Procedure Call</h4><p>\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u4E4B\u95F4\u901A\u8FC7\u8FDC\u7A0B\u8C03\u7528\u7684\u65B9\u5F0F\u8FDB\u884C\u901A\u4FE1\uFF0C\u4EE5\u5B9E\u73B0\u8DE8\u7F51\u7EDC\u7684\u670D\u52A1\u8C03\u7528\u548C\u6570\u636E\u4F20\u8F93 <img src="'+d+'" alt="RPC"></p><ul><li>\u670D\u52A1\u4E4B\u95F4\u7684\u4F9D\u8D56\u6027\u589E\u52A0\uFF0C\u4E00\u65E6\u67D0\u4E2A\u670D\u52A1\u51FA\u73B0\u6545\u969C\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u6574\u4E2A\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u3002</li><li>\u968F\u7740\u670D\u52A1\u7684\u8FED\u4EE3\u66F4\u65B0\uFF0C\u670D\u52A1\u7248\u672C\u7BA1\u7406\u53D8\u5F97\u590D\u6742\uFF0C\u9700\u8981\u8003\u8651\u4E0D\u540C\u7248\u672C\u4E4B\u95F4\u7684\u517C\u5BB9\u6027\u3002</li></ul><h4 id="esb\u67B6\u6784-enterprise-service-bus" tabindex="-1"><a class="header-anchor" href="#esb\u67B6\u6784-enterprise-service-bus" aria-hidden="true">#</a> ESB\u67B6\u6784 Enterprise Service Bus</h4><p><img src="'+n+'" alt="ESB"></p><ul><li>\u867D\u7136\u5B9E\u73B0\u4E86\u6C34\u5E73\u7684\u6269\u5C55\uFF0C\u4F46\u662FESB\u5374\u6210\u4E86\u7CFB\u7EDF\u7684\u4E2D\u5FC3</li><li>\u5B58\u5728\u5355\u70B9\u6545\u969C\u7684\u98CE\u9669\uFF0C\u4E00\u65E6ESB\u51FA\u73B0\u95EE\u9898\uFF0C\u6574\u4E2A\u7CFB\u7EDF\u53EF\u80FD\u53D7\u5230\u5F71\u54CD\u3002</li><li>\u968F\u7740\u670D\u52A1\u6570\u91CF\u7684\u589E\u52A0\uFF0CESB\u53EF\u80FD\u6210\u4E3A\u7CFB\u7EDF\u6027\u80FD\u7684\u74F6\u9888\uFF0C\u5F71\u54CD\u7CFB\u7EDF\u7684\u541E\u5410\u91CF\u548C\u54CD\u5E94\u65F6\u95F4\u3002</li></ul><h2 id="\u5FAE\u670D\u52A1\u67B6\u6784-microservices-architecture" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u67B6\u6784-microservices-architecture" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u67B6\u6784 Microservices Architecture</h2><p><img src="'+t+'" alt="Microservices"> \u5728\u670D\u52A1\u5316\u67B6\u6784\u7684\u57FA\u7840\u4E0A\u6F14\u8FDB\u800C\u6765\uFF0C\u8FDB\u4E00\u6B65\u5C06\u670D\u52A1\u7EC6\u5206\u4E3A\u66F4\u5C0F\u7684\u3001\u72EC\u7ACB\u90E8\u7F72\u7684\u5FAE\u670D\u52A1\u3002 \u6BCF\u4E2A\u5FAE\u670D\u52A1\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u5F00\u53D1\u3001\u90E8\u7F72\u3001\u6269\u5C55\u548C\u7BA1\u7406\uFF0C\u670D\u52A1\u4E4B\u95F4\u901A\u8FC7\u8F7B\u91CF\u7EA7\u7684\u901A\u4FE1\u673A\u5236\uFF08\u5982HTTP\u3001\u6D88\u606F\u961F\u5217\uFF09\u8FDB\u884C\u901A\u4FE1\u3002 \u5FAE\u670D\u52A1\u67B6\u6784\u63D0\u4F9B\u4E86\u66F4\u5927\u7684\u7075\u6D3B\u6027\u548C\u53EF\u4F38\u7F29\u6027\uFF0C\u4F7F\u56E2\u961F\u53EF\u4EE5\u66F4\u5FEB\u5730\u5F00\u53D1\u548C\u90E8\u7F72\u65B0\u529F\u80FD\uFF0C\u4F46\u4E5F\u9700\u8981\u89E3\u51B3\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5E26\u6765\u7684\u6311\u6218\uFF0C\u5982\u670D\u52A1\u53D1\u73B0\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u6570\u636E\u4E00\u81F4\u6027\u7B49\u95EE\u9898\u3002</p><h3 id="\u81EA\u8EAB\u4F18\u52BF-2" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8EAB\u4F18\u52BF-2" aria-hidden="true">#</a> \u81EA\u8EAB\u4F18\u52BF</h3><ul><li>\u9AD8\u5EA6\u53EF\u6269\u5C55\uFF1A \u5FAE\u670D\u52A1\u67B6\u6784\u652F\u6301\u6C34\u5E73\u6269\u5C55\uFF0C\u53EF\u4EE5\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u52A8\u6001\u8C03\u6574\u670D\u52A1\u7684\u6570\u91CF\u548C\u89C4\u6A21</li><li>\u677E\u8026\u5408\uFF1A \u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u5404\u4E2A\u670D\u52A1\u4E4B\u95F4\u677E\u8026\u5408\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u5F00\u53D1\u3001\u90E8\u7F72\u548C\u6269\u5C55\uFF0C\u964D\u4F4E\u4E86\u7CFB\u7EDF\u7684\u7EF4\u62A4\u6210\u672C</li><li>\u6280\u672F\u591A\u6837\u6027\uFF1A \u5FAE\u670D\u52A1\u67B6\u6784\u652F\u6301\u591A\u8BED\u8A00\u3001\u591A\u6280\u672F\u6808\u7684\u6DF7\u5408\u90E8\u7F72\uFF0C\u53EF\u4EE5\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u6700\u9002\u5408\u7684\u6280\u672F\u89E3\u51B3\u65B9\u6848</li></ul><h3 id="\u9762\u4E34\u95EE\u9898-1" tabindex="-1"><a class="header-anchor" href="#\u9762\u4E34\u95EE\u9898-1" aria-hidden="true">#</a> \u9762\u4E34\u95EE\u9898</h3><ul><li>\u5728\u8DE8\u591A\u4E2A\u670D\u52A1\u7684\u4E1A\u52A1\u6D41\u7A0B\u4E2D\uFF0C\u4E8B\u52A1\u7BA1\u7406\u53EF\u80FD\u4F1A\u53D8\u5F97\u590D\u6742\uFF0C\u9700\u8981\u8003\u8651\u5206\u5E03\u5F0F\u4E8B\u52A1\u5904\u7406\u7684\u673A\u5236\u3002</li><li>\u7531\u4E8E\u7CFB\u7EDF\u7684\u590D\u6742\u6027\uFF0C\u76D1\u63A7\u548C\u8C03\u8BD5\u53EF\u80FD\u4F1A\u53D8\u5F97\u56F0\u96BE\uFF0C\u9700\u8981\u5EFA\u7ACB\u6709\u6548\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u7CFB\u7EDF\u6765\u8FFD\u8E2A\u95EE\u9898\u3002</li></ul><h3 id="\u901A\u4FE1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u901A\u4FE1\u65B9\u5F0F" aria-hidden="true">#</a> \u901A\u4FE1\u65B9\u5F0F</h3><h4 id="\u540C\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F" aria-hidden="true">#</a> \u540C\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F</h4><p>\u57FA\u4E8EREST\u67B6\u6784\u98CE\u683C\u8BBE\u8BA1\u7684API\uFF0C\u4F7F\u7528HTTP\u534F\u8BAE\u8FDB\u884C\u901A\u4FE1 <img src="'+s+'" alt="Microservices"></p><h5 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h5><ul><li>\u7B80\u5355\u6027\uFF1A\u6613\u4E8E\u7406\u89E3\u548C\u4F7F\u7528</li><li>\u72EC\u7ACB\u6027\uFF1A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u7684\u677E\u8026\u5408</li><li>\u53EF\u7F13\u5B58\u6027\uFF1A\u5229\u7528HTTP\u7F13\u5B58\u673A\u5236\u63D0\u9AD8\u6027\u80FD</li></ul><h5 id="\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#\u52A3\u52BF" aria-hidden="true">#</a> \u52A3\u52BF</h5><ul><li>\u7075\u6D3B\u6027\u53D7\u9650\uFF1ARESTful API\u8BBE\u8BA1\u53EF\u80FD\u4E0D\u591F\u7075\u6D3B\uFF0C\u65E0\u6CD5\u6EE1\u8DB3\u6240\u6709\u9700\u6C42</li><li>\u5B89\u5168\u6027\uFF1A\u9700\u8981\u989D\u5916\u7684\u5B89\u5168\u673A\u5236\u6765\u4FDD\u62A4API</li></ul><h5 id="\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h5><ul><li>\u9002\u5408\u9700\u8981\u7B80\u5355\u3001\u6807\u51C6\u5316\u63A5\u53E3\u7684\u573A\u666F\uFF0C\u5982Web\u5E94\u7528\u7A0B\u5E8F\u3001\u79FB\u52A8\u5E94\u7528\u7A0B\u5E8F\u7B49</li></ul><h5 id="\u5E38\u7528\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177</h5><p>Express.js\u3001Spring Boot\u3001Django\u7B49</p><h4 id="\u5F02\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F" aria-hidden="true">#</a> \u5F02\u6B65\u8BF7\u6C42\u54CD\u5E94\u6A21\u5F0F</h4><p>\u57FA\u4E8E\u6D88\u606F\u961F\u5217\uFF0C\u5141\u8BB8\u4E0D\u540C\u7684\u670D\u52A1\u901A\u8FC7\u53D1\u9001\u548C\u63A5\u6536\u6D88\u606F\u8FDB\u884C\u901A\u4FE1\u3002\u6D88\u606F\u961F\u5217\u63D0\u4F9B\u4E86\u89E3\u8026\u3001\u5F02\u6B65\u3001\u53EF\u9760\u6027\u7684\u7279\u6027\u3002 <img src="'+c+'" alt="Microservices"></p><h5 id="\u4F18\u52BF-1" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF-1" aria-hidden="true">#</a> \u4F18\u52BF</h5><ul><li>\u89E3\u8026\uFF1A\u53D1\u9001\u65B9\u548C\u63A5\u6536\u65B9\u4E4B\u95F4\u7684\u89E3\u8026\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u7075\u6D3B\u6027\u548C\u53EF\u7EF4\u62A4\u6027</li><li>\u5F02\u6B65\u901A\u4FE1\uFF1A\u63D0\u9AD8\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u548C\u541E\u5410\u91CF</li><li>\u53EF\u9760\u6027\uFF1A\u6D88\u606F\u961F\u5217\u901A\u5E38\u63D0\u4F9B\u6D88\u606F\u6301\u4E45\u5316\u548C\u6D88\u606F\u91CD\u8BD5\u673A\u5236\uFF0C\u786E\u4FDD\u6D88\u606F\u7684\u53EF\u9760\u4F20\u9012</li></ul><h5 id="\u52A3\u52BF-1" tabindex="-1"><a class="header-anchor" href="#\u52A3\u52BF-1" aria-hidden="true">#</a> \u52A3\u52BF</h5><ul><li>\u5F15\u5165\u590D\u6742\u6027\uFF1A\u9700\u8981\u5904\u7406\u6D88\u606F\u7684\u5E8F\u5217\u5316\u3001\u53CD\u5E8F\u5217\u5316\u3001\u6D88\u606F\u786E\u8BA4\u7B49\u95EE\u9898</li><li>\u53EF\u80FD\u5F15\u5165\u5EF6\u8FDF\uFF1A\u5F02\u6B65\u901A\u4FE1\u53EF\u80FD\u5BFC\u81F4\u6D88\u606F\u5904\u7406\u7684\u5EF6\u8FDF</li></ul><h5 id="\u9002\u7528\u573A\u666F-1" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F-1" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h5><p>\u9002\u5408\u9700\u8981\u89E3\u8026\u3001\u5F02\u6B65\u901A\u4FE1\u548C\u53EF\u9760\u6027\u7684\u573A\u666F\uFF0C\u5982\u65E5\u5FD7\u5904\u7406\u3001\u4EFB\u52A1\u961F\u5217\u7B49</p><h5 id="\u5E38\u7528\u5DE5\u5177-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177-1" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177</h5><p>RabbitMQ\u3001Kafka\u3001ActiveMQ\u3001Amazon SQS\u7B49</p><h4 id="\u4E8B\u4EF6\u9A71\u52A8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u9A71\u52A8\u6A21\u5F0F" aria-hidden="true">#</a> \u4E8B\u4EF6\u9A71\u52A8\u6A21\u5F0F</h4><p>\u901A\u8FC7\u4E8B\u4EF6\u8FDB\u884C\u670D\u52A1\u95F4\u901A\u4FE1\uFF0C\u670D\u52A1\u53EF\u4EE5\u53D1\u5E03\u548C\u8BA2\u9605\u4E8B\u4EF6\uFF0C\u5B9E\u73B0\u677E\u8026\u5408\u548C\u5F02\u6B65\u901A\u4FE1\u3002 <img src="'+u+'" alt="Microservices"></p><h5 id="\u4F18\u52BF-2" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF-2" aria-hidden="true">#</a> \u4F18\u52BF</h5><ul><li>\u677E\u8026\u5408\uFF1A\u670D\u52A1\u4E4B\u95F4\u901A\u8FC7\u4E8B\u4EF6\u8FDB\u884C\u901A\u4FE1\uFF0C\u89E3\u8026\u670D\u52A1\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB</li><li>\u5F02\u6B65\u901A\u4FE1\uFF1A\u63D0\u9AD8\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u548C\u53EF\u6269\u5C55\u6027</li><li>\u53EF\u9760\u6027\uFF1A\u4E8B\u4EF6\u9A71\u52A8\u67B6\u6784\u901A\u5E38\u63D0\u4F9B\u4E8B\u4EF6\u6301\u4E45\u5316\u548C\u91CD\u8BD5\u673A\u5236</li></ul><h5 id="\u52A3\u52BF-2" tabindex="-1"><a class="header-anchor" href="#\u52A3\u52BF-2" aria-hidden="true">#</a> \u52A3\u52BF</h5><ul><li>\u590D\u6742\u6027\uFF1A\u5F15\u5165\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u53EF\u80FD\u589E\u52A0\u7CFB\u7EDF\u7684\u590D\u6742\u6027</li><li>\u8C03\u8BD5\u56F0\u96BE\uFF1A\u4E8B\u4EF6\u9A71\u52A8\u7CFB\u7EDF\u7684\u8C03\u8BD5\u53EF\u80FD\u76F8\u5BF9\u56F0\u96BE</li></ul><h5 id="\u9002\u7528\u573A\u666F-2" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F-2" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h5><p>\u9002\u5408\u9700\u8981\u677E\u8026\u5408\u3001\u5F02\u6B65\u901A\u4FE1\u548C\u53EF\u6269\u5C55\u6027\u7684\u573A\u666F\uFF0C\u5982\u5B9E\u65F6\u6570\u636E\u5904\u7406\u3001\u65E5\u5FD7\u5904\u7406\u7B49</p><h5 id="\u5E38\u7528\u5DE5\u5177-2" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177-2" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177</h5><p>RabbitMQ\u3001Kafka\u3001AWS SNS/SQS\u7B49</p><h4 id="\u5171\u4EAB\u6570\u636E\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5171\u4EAB\u6570\u636E\u6A21\u5F0F" aria-hidden="true">#</a> \u5171\u4EAB\u6570\u636E\u6A21\u5F0F</h4><p>\u53EF\u4EE5\u7CBE\u786E\u5730\u8BF7\u6C42\u9700\u8981\u7684\u6570\u636E\uFF0C\u907F\u514D\u8FC7\u5EA6\u83B7\u53D6\u6570\u636E <img src="'+o+'" alt="Microservices"></p><h5 id="\u4F18\u52BF-3" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF-3" aria-hidden="true">#</a> \u4F18\u52BF</h5><ul><li>\u7075\u6D3B\u6027\uFF1A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6309\u9700\u83B7\u53D6\u6570\u636E\uFF0C\u51CF\u5C11\u7F51\u7EDC\u4F20\u8F93\u548C\u6570\u636E\u5197\u4F59\u3002</li><li>\u5F3A\u7C7B\u578B\uFF1A\u5B9A\u4E49\u6E05\u6670\u7684\u6570\u636E\u6A21\u578B\u548C\u67E5\u8BE2\u63A5\u53E3\u3002</li><li>\u81EA\u63CF\u8FF0\u6027\uFF1A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u67E5\u8BE2API\u7684\u7ED3\u6784\u548C\u6570\u636E\u3002</li></ul><h5 id="\u52A3\u52BF-3" tabindex="-1"><a class="header-anchor" href="#\u52A3\u52BF-3" aria-hidden="true">#</a> \u52A3\u52BF</h5><ul><li>\u5B66\u4E60\u66F2\u7EBF\uFF1A\u6709\u4E00\u5B9A\u7684\u5B66\u4E60\u66F2\u7EBF\u3002</li><li>\u6027\u80FD\u95EE\u9898\uFF1A\u590D\u6742\u67E5\u8BE2\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002</li></ul><h5 id="\u9002\u7528\u573A\u666F-3" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F-3" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h5><p>\u9002\u5408\u9700\u8981\u7075\u6D3B\u3001\u7CBE\u786E\u6570\u636E\u67E5\u8BE2\u7684\u573A\u666F\uFF0C\u5982\u590D\u6742\u524D\u7AEF\u5E94\u7528\u7A0B\u5E8F\u3001\u6570\u636E\u805A\u5408\u670D\u52A1\u7B49</p><h5 id="\u5E38\u7528\u5DE5\u5177-3" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177-3" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177</h5><p>Apollo Server\u3001GraphQL Yoga\u3001Prisma\u7B49</p><h2 id="serverless\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#serverless\u67B6\u6784" aria-hidden="true">#</a> Serverless\u67B6\u6784\uFF1A</h2><p>Serverless\u67B6\u6784\u662F\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5EF6\u4F38\uFF0C\u5F3A\u8C03\u66F4\u591A\u7684\u62BD\u8C61\u548C\u81EA\u52A8\u5316\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u5173\u6CE8\u670D\u52A1\u5668\u7684\u7BA1\u7406\u548C\u7EF4\u62A4\u3002 \u5E94\u7528\u4EE5\u51FD\u6570\u4E3A\u5355\u4F4D\u8FDB\u884C\u90E8\u7F72\u548C\u8FD0\u884C\uFF0C\u7531\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\u52A8\u6001\u7BA1\u7406\u8D44\u6E90\uFF0C\u6839\u636E\u9700\u6C42\u5206\u914D\u8BA1\u7B97\u8D44\u6E90\uFF0C\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u66F4\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u903B\u8F91\u7684\u5F00\u53D1\u3002</p><h3 id="\u81EA\u8EAB\u4F18\u52BF-3" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8EAB\u4F18\u52BF-3" aria-hidden="true">#</a> \u81EA\u8EAB\u4F18\u52BF</h3><ul><li>\u670D\u52A1\u8D1F\u8F7D\u80FD\u529B\u6781\u5F3A</li><li>\u5F00\u53D1\u8005\u65E0\u9700\u5173\u6CE8\u8FD0\u7EF4\u90E8\u7F72\u76F8\u5173\u5185\u5BB9\uFF0C\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u5F00\u53D1</li><li>\u5BF9\u7EBF\u4E0A\u95EE\u9898\u7684\u8DDF\u8E2A\u590D\u73B0\u76F8\u5BF9\u7E41\u7410\uFF0C\u4E0D\u6613\u8C03\u8BD5</li></ul><h3 id="\u9762\u4E34\u95EE\u9898-2" tabindex="-1"><a class="header-anchor" href="#\u9762\u4E34\u95EE\u9898-2" aria-hidden="true">#</a> \u9762\u4E34\u95EE\u9898</h3><ul><li>\u6570\u636E\u5E93\u5C42\u7EA7\u5BF9severless\u7684\u652F\u6301\u6709\u9650</li><li>\u670D\u52A1\u53CA\u5E94\u7528\u89C4\u6A21\u6269\u5927\u540E\u6210\u672C\u9AD8\u6602</li></ul>',81),b=[f];function x(m,v){return a(),e("div",null,b)}var g=i(p,[["render",x],["__file","2024-05-12-Architecture.html.vue"]]);export{g as default};