---
layout: default
---

<div class="lead">
Hi, we are the [Wallace lab](people/) at [King's College London](kcl.ac.uk). We build **artificial mimics of the cell membrane**  to improve our understanding of the physics underpinning cell biology and engineer new devices inspired by biology.

Our approach is to dismantle the membrane into its component parts, and then rebuild it from scratch to figure out what's going on. We do this by developing new optical techniques capable of detecting **individual molecules**.
</div>

<hr/>
<div class="lead">
<!-- {% assign post = site.posts.first %}
{% assign content = post.content %} -->


{% for post in site.posts limit:2 %}


<p class=" lead-about"><b class="desc">
{% if page.title %}
    <a href="{{ root_url }}{{ page.url }}">{{ page.title }}</a>
{% endif %}
{% if post.authors %}
	<a href="{{ root_url}}/papers">New paper  - {{ post.title }} </a>
{% elsif post.mugshot %}
  <a href="{{ root_url}}/papers">New lab member  - {{ post.title }} </a>
{% elsif post.title %}
  <a href="{{ root_url }}{{ post.url }}">{{ post.title }}</a>
{% endif %}
</b>
	{% if post.authors %}
		{{ post.journal }}
	{% elsif post.desc %}
		{{ post.desc }}
  {% elsif post.mugshot %}
    <p>{{ post.title}} joins the group.</p>
	{% else %}
		{{ post.excerpt }}
	{% endif %}
</p>

{% endfor %}

</div>
