(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),o=a.n(c),r=a(3),s=a(4),l=a(7),m=a(5),u=a(8),g=a(6),d=(a(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.updateStats(e.clickCounter,e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),p=function(e){return i.a.createElement("span",null,"SCORE: ",e.info.score," | TOP SCORE: ",e.info.topScore)},k=function(e){return i.a.createElement("span",null,"null"===e.info.guess?"CLICK AN IMAGE TO BEGIN":e.info.guess)},v=(a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={cards:g,score:0,topScore:0,guess:"null"},a.shuffle=function(e){for(var t,a,n=e.length;n;t=parseInt(Math.random()*n),a=e[--n],e[n]=e[t],e[t]=a);return e},a.updateStats=function(e,t){0===e?a.continueGame(t):a.newGame()},a.continueGame=function(e){var t=a.state.cards.filter(function(t){return t.id===e});t[0].clickCounter+=1;var n=a.state.cards.filter(function(t){return t.id!==e}).concat(t),i=a.state.score+1,c=a.state.topScore;c<i?c+=1:c=a.state.topScore,a.setState({cards:n,score:i,topScore:c,guess:"YOU GUESSED CORRECTLY!"})},a.newGame=function(){var e=a.state.cards.map(function(e){var t={};return t.id=e.id,t.image=e.image,t.clickCounter=0,t});a.setState({cards:e,score:0,topScore:a.state.topScore,guess:"YOU GUESSED INCORRECTLY!"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar-dark bg-dark"},i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"nav nav-pills nav-fill navbar-dark bg-dark"},i.a.createElement("span",{className:"nav-item text-white text-left"},i.a.createElement("h3",{className:"brand"},"CLICKY GAME")),i.a.createElement("span",{className:"nav-item text-white text-center"},i.a.createElement("h3",{className:"stats"},i.a.createElement(k,{info:this.state}))),i.a.createElement("span",{className:"nav-item text-white text-right"},i.a.createElement("h3",{className:"stats"},i.a.createElement(p,{info:this.state})))))),i.a.createElement("section",{className:"flex-column text-center header"},i.a.createElement("div",{className:"box"},i.a.createElement("h1",{className:"banner1"},"Clicky Game!"),i.a.createElement("h2",{className:"banner2"},"Click on an image to earn points, but dont click on any image more than once!"))),i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"container-cards"},this.shuffle(this.state.cards).map(function(t){return i.a.createElement(d,{id:t.id,key:t.id,name:t.name,image:t.image,clickCounter:t.clickCounter,updateStats:e.updateStats})}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",clickCounter:0},{id:2,image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clickCounter:0},{id:3,image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clickCounter:0},{id:4,image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clickCounter:0},{id:5,image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clickCounter:0},{id:6,image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clickCounter:0},{id:7,image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clickCounter:0},{id:8,image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",clickCounter:0},{id:9,image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clickCounter:0},{id:10,image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clickCounter:0},{id:11,image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clickCounter:0},{id:12,image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clickCounter:0}]},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.9ac8a0e2.chunk.js.map