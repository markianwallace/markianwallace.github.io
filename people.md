---
layout: default
title: People
---
{% for post in site.categories.PI %}
<div>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h1 class="">{{ post.title }}</h1>
  </a>
</div>
{{ post.excerpt}}
<br />
{% endfor %}

{% for post in site.categories.current %}
<div>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h1 class="">{{ post.title }}</h1>
  </a>
</div>
{{ post.excerpt}}
<br />
{% endfor %}

# Previous Group Members
<div>
  <p>
  Credit for this creative science goes to a small army of previous group members:

    {% for post in site.categories.previous %}
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>,
    {% endfor %}

  and all the others missing from this list. Thanks!
  </p>
</div>
