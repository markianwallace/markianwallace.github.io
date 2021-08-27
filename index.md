---
layout: default
title: Wallace Lab
nav_exclude: true
---
{% for post in site.posts limit:10 %}
<div>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h1 class="">{{ post.title }}</h1>
  </a>

  {% if post.doi %}
  <h3><a href="https://doi.org/{{post.doi}}">{{post.doi}}</a></h3>
  {% else %}
  <h3>{{ post.date | date: "%B, %Y" }}</h3>
  {% endif %}

  {% if post.marginfigure %}
  <label for="{{post.marginfigure}}" class="margin-toggle">&#8853;</label>
  {% endif %}

</div>

{% if post.marginfigure %}
<input type="checkbox" id="{{post.marginfigure}}" class="margin-toggle" />
<span class="marginnote"><img class="fullwidth" src="/assets/img/{{post.marginfigure}}" /><br>{{post.figurecaption}}</span>
{% endif %}

{{ post.excerpt}}
<br />
{% endfor %}
