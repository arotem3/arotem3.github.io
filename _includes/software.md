<h2 id="software-projects" style="margin: 2px 0px -15px;">Research Software Projects</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.software.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.language %}
    <abbr class="badge">{{ link.language }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
    <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
    <div class="author">{{ link.description }}</div>
    <div class="periodical"><em>{{ link.context }}</em></div>
    <div class="links">
      {% if link.code %}
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.docs %}
      <a href="{{ link.docs }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Docs</a>
      {% endif %}
      {% if link.demo %}
      <a href="{{ link.demo }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Demo</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.notes %}
      <strong><i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
