import{_ as e,r,o as d,c as o,a,b as i,d as n,e as s}from"./app.a02a1714.js";const l={},p=n('<h1 id="jar-\u5305\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#jar-\u5305\u90E8\u7F72" aria-hidden="true">#</a> Jar \u5305\u90E8\u7F72</h1><h2 id="\u73AF\u5883\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u8981\u6C42" aria-hidden="true">#</a> \u73AF\u5883\u8981\u6C42</h2><ol><li>Java 11+</li><li>Mysql 5.7+</li></ol><h2 id="\u90E8\u7F72\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6D41\u7A0B" aria-hidden="true">#</a> \u90E8\u7F72\u6D41\u7A0B</h2>',4),c=s("\u5728 "),u={href:"https://github.com/vran-dev/databasir/releases",target:"_blank",rel:"noopener noreferrer"},b=s("Github RELEASE"),h=s(" \u9875\u9762\u4E0B\u8F7D\u6700\u65B0\u7248\u5E94\u7528 Databasir.jar (\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u514B\u9686\u9879\u76EE\u540E\u81EA\u884C\u6784\u5EFA)"),v=a("li",null,[a("p",null,"\u5C06 Databasir.jar \u4E0A\u4F20\u5230\u670D\u52A1\u5668")],-1),k=a("li",null,[a("p",null,"\u6267\u884C\u542F\u52A8\u547D\u4EE4")],-1),m=n(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>java <span class="token operator">-</span>jar databasir<span class="token punctuation">.</span>jar <span class="token operator">--</span>databasir<span class="token punctuation">.</span>db<span class="token punctuation">.</span>url<span class="token operator">=</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3306</span> <span class="token operator">--</span>databasir<span class="token punctuation">.</span>db<span class="token punctuation">.</span>username<span class="token operator">=</span>root <span class="token operator">--</span>databasir<span class="token punctuation">.</span>db<span class="token punctuation">.</span>password<span class="token operator">=</span><span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>databasir.db.url</td><td>\u6570\u636E\u5E93\u5730\u5740</td><td>\u662F</td><td></td></tr><tr><td>databasir.db.username</td><td>\u6570\u636E\u5E93\u7528\u6237\u540D</td><td>\u662F</td><td></td></tr><tr><td>databasir.db.password</td><td>\u6570\u636E\u5E93\u5BC6\u7801</td><td>\u662F</td><td></td></tr><tr><td>databasir.jwt.secret</td><td>\u751F\u6210\u767B\u5F55 Token \u7684\u79D8\u94A5</td><td>\u5426</td><td>uuid</td></tr><tr><td>databasir.db.driver-directory</td><td>\u81EA\u5B9A\u4E49\u9A71\u52A8\u7684\u4E0A\u4F20\u76EE\u5F55</td><td>\u5426</td><td>\u9879\u76EE\u6240\u5728\u4F4D\u7F6E\u7684 <code>drivers/</code> \u76EE\u5F55</td></tr></tbody></table><p>**\u6CE8\u610F\uFF1A**\u5982\u679C\u90E8\u7F72\u4E86\u591A\u4E2A databasir \u5B9E\u4F8B\uFF0C\u4E00\u5B9A\u8981\u5B9A\u4E49 <code>databasir.jwt.secret</code> \u7684\u503C\uFF0C\u4ECE\u800C\u4F7F\u5F97\u591A\u4E2A\u5B9E\u4F8B\u4E4B\u95F4\u7684 <code>databasir.jwt.secret</code> \u4FDD\u6301\u4E00\u81F4</p><h2 id="\u767B\u5F55\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u9A8C\u8BC1" aria-hidden="true">#</a> \u767B\u5F55\u9A8C\u8BC1</h2><p>\u5E94\u7528\u542F\u52A8\u5B8C\u6210\u540E\u4F1A\u9ED8\u8BA4\u521B\u5EFA Databasir \u7BA1\u7406\u5458\u7528\u6237</p><ul><li>\u7528\u6237\u540D\uFF1Adatabasir</li><li>\u5BC6\u7801\uFF1Adatabasir</li></ul><p>\u901A\u8FC7\u8BE5\u8D26\u53F7\u767B\u5F55\u5E94\u7528\u65E2\u53EF\u4EE5\u8FDB\u884C\u7BA1\u7406</p><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u9664\u4E86\u5728\u547D\u4EE4\u884C\u6307\u5B9A\u53C2\u6570\u542F\u52A8\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u6765\u4FDD\u5B58</p><p>\u5728 Databasir.jar \u6240\u5728\u76EE\u5F55\u521B\u5EFA config \u76EE\u5F55\uFF0C\u5E76\u5728\u76EE\u5F55\u4E0B\u521B\u5EFA <code>application.properties</code> \u914D\u7F6E\uFF0C\u914D\u7F6E\u4E2D\u914D\u7F6E MYSQL \u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u548C\u8FDE\u63A5</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># \u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4 8080</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>
<span class="token comment"># \u6570\u636E\u5E93\u7528\u6237\u540D</span>
<span class="token key attr-name">databasir.db.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token comment"># \u6570\u636E\u5E93\u5BC6\u7801</span>
<span class="token key attr-name">databasir.db.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token comment"># \u6570\u636E\u5E93\u5730\u5740</span>
<span class="token key attr-name">databasir.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:3306</span>
<span class="token comment"># \u767B\u5F55 token \u751F\u6210\u79D8\u94A5\uFF0C\u53EF\u9009</span>
<span class="token key attr-name">databasir.jwt.secret</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.uuid}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>java -jar Databasir.jar</code> \u542F\u52A8\u5E94\u7528\u5373\u53EF</p>`,13);function _(j,f){const t=r("ExternalLinkIcon");return d(),o("div",null,[p,a("ol",null,[a("li",null,[a("p",null,[c,a("a",u,[b,i(t)]),h])]),v,k]),m])}var g=e(l,[["render",_],["__file","jar-deploy.html.vue"]]);export{g as default};
