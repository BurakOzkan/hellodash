(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),c=a.n(i),o=(a(16),a(17),a(6)),s=a.n(o),l=a(9),u=a(1),m=a(2),p=a(4),d=a(3),h=a(5),y=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title-container__title"},"Weather Finder"),n.a.createElement("p",{className:"title-container__subtitle"},"Find out temperature"))},v=function(e){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City..."}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country..."}),n.a.createElement("button",null,"GET WEATHER")))},w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"weather__info"},this.props.city&&this.props.country&&n.a.createElement("p",{className:"weather__key"}," Location:",n.a.createElement("span",{className:"weather__value"}," ",this.props.city,", ",this.props.country)),this.props.temperature&&n.a.createElement("p",{className:"weather__key"}," Temperature:",n.a.createElement("span",{className:"weather__value"}," ",this.props.temperature," ")),this.props.humidity&&n.a.createElement("p",{className:"weather__key"}," Humidity:",n.a.createElement("span",{className:"weather__value"}," ",this.props.humidity," ")),this.props.description&&n.a.createElement("p",{className:"weather__key"}," Conditions:",n.a.createElement("span",{className:"weather__value"}," ",this.props.description," ")),this.props.error&&n.a.createElement("p",{className:"weather__error"},this.props.error))}},{key:"componentDidUpdate",value:function(){"clear sky"===this.props.description&&(document.getElementsByClassName("title-container")[0].style.background='url("https://www.studereducation.com/wp-content/uploads/2014/07/clear-sky-over-green-grass-wallpaper.jpg") center center repeat')}}]),t}(n.a.Component),E="e30d47356db578e746eb3926c4cd390e",f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},a.getWeather=function(){var e=Object(l.a)(s.a.mark(function e(t){var r,n,i,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.city.value,n=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&APPID=").concat(E,"&units=metric"));case 5:return i=e.sent,e.next=8,i.json();case 8:c=e.sent,r&&n?a.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""}):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter the value."});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.JFCustomWidget.subscribe("ready",function(){console.log("Widget is ready")})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-5 title-container"},n.a.createElement(y,null)),n.a.createElement("div",{className:"col-xs-7 form-container"},n.a.createElement(v,{getWeather:this.getWeather}),n.a.createElement(w,{temperature:this.state.temperature,humidity:this.state.humidity,city:this.state.city,country:this.state.country,description:this.state.description,error:this.state.error})))))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e20a5792.chunk.js.map