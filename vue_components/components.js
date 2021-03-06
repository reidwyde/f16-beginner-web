Vue.component('toc_old', {
  props: {
    'pages' : Array,
  },
  template: 
  `<div class="panel two columns" id="toc">
    <h5 v-for="page in pages" 
      class="toc-elem"
      v-bind:class="{\'current-page\': page.current}">
    <a v-bind:href="page.link">{{page.text}}</a>
    </h5>
  </div>`
})

Vue.component('toc', {
  props: {
    'current' : String
  },
  data: function () {
    pages = 
      {"Intro": {"link" : "../week1/wk1.html"},
        "OOP": {"link": "../week2/wk2.html"},
        "Functions": {"link": "../week3/wk3.html"},
        "CSS": {"link": "../week4/wk4.html"},
        "Layout": {"link": "../week5/wk5.html"},
        "HTTP": {"link": "../week6/wk6.html"},
        "Servers": {"link": "../week7/wk7.html"},
        "Vue": {"link": "../week8/wk8.html"},
        "Templates": {"link": "../week9/wk9.html"}};
    if(pages[this.current]){
      pages[this.current].current = true;
    }
    return {
      'pages' : pages,
      'page_titles' : 
        ["Intro", "OOP", "Functions", "CSS", "Layout", 
          "HTTP", "Servers", "Vue", "Templates"]
    }
  },
  template:
  `<div class="panel two columns" style="border-right: 1px solid #bdc3c7; padding-right: 20px;" id="toc">
    <img src="../images/mad_m.png" width="50%" style="margin-bottom: 15%; margin-top: -9px;">
    <h5 v-for="page in page_titles" 
        class="toc-elem"
        v-bind:class="{\'current-page\': pages[page].current}">
      <a v-bind:href="pages[page].link">{{page}}</a>
    </h5>
  </div>`
})

Vue.component('text-section', {
  props: {
    'title' : String,
  },
  template:
  `<h3>{{ title }}</h3>
  <slot></slot>`
})

Vue.component('big-text-section', {
  props: {
    'title' : String,
  },
  template:
  `<h1>{{ title }}</h1>
  <slot></slot>`
})

var app = new Vue({
  el: '#app',
  data: {
    pages : [
      {"link": "../week1/wk1.html", "text": "Week 1", "current": true},
      {"link": "../week2/wk2.html", "text": "Week 2"},
      {"link": "../week3/wk3.html", "text": "Week 3"},
      {"link": "../week4/wk4.html", "text": "Week 4"},
      {"link": "../week5/wk5.html", "text": "Week 5"},
      {"link": "../week6/wk6.html", "text": "Week 6"},
      {"link": "../week7/wk7.html", "text": "Week 7"},
      {"link": "../week8/wk8.html", "text": "Week 8"},
      {"link": "../week9/wk9.html", "text": "Week 9"}
    ]
  }
})