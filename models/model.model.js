<!-- email_app/templates/contact.html -->

{% extends "base.html" %}

{% block content %}
<div class="container mt-5">
    <h1>Contactez-nous</h1>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
    {% if error %}
        <div class="alert alert-danger">{{ error }}</div>
    {% endif %}
</div>
{% endblock %}