---
layout: default
title: Fun
---
<div>
  {% for post in site.tags.fun %}
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h1 class="">{{ post.title }}</h1>
  </a>
  {% if post.doi %}
  <h3><a href="https://doi.org/{{post.doi}}">{{post.doi}}</a></h3>
  {% else %}
  <h3>{{ post.date | date: "%B %-d, %Y" }}</h3>
  {% endif %}
  {{ post.excerpt }}
  <br />

  {% endfor %}
</div>
