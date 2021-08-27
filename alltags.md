---
layout: default
title: All Tags
nav_exclude: true
---
<div>
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
    {% assign vids = tag[1] | sort %}
    {% if vids != empty %}
      <h1 class="sans">#{{tag[0]}}</h1>
      <hr class="slender"/>
          {% for post in vids %}
          <a href="{{ post.url | prepend: site.baseurl }}">
            <h1 class="">{{ post.title }}</h1>
          </a>
          {% if post.doi %}
          <h3><a href="https://doi.org/{{post.doi}}">{{post.doi}}</a></h3>
          {% else %}
          <h3>{{ post.date | date: "%B %-d, %Y" }}</h3>
          {% endif %}
          {{ post.excerpt }}
          <!-- <hr class="slender"> -->
          <br />

          {% endfor %}
    {% endif %}
    {% endfor %}
</div>
