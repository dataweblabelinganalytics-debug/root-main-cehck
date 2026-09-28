import json

def test_health_endpoint(client):
    response = client.get('/api/health')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert data['status'] == 'healthy'
    assert 'timestamp' in data

def test_contact_valid(client, db_session):
    payload = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "subject": "Inquiry",
        "message": "Hello, I want to work with you.",
        "project_interest": "AI & Automation"
    }
    response = client.post('/api/contact', json=payload)
    assert response.status_code == 201
    data = json.loads(response.data)
    assert 'inquiry_id' in data
    assert data['message'] == "Inquiry submitted successfully"

def test_contact_missing_fields(client, db_session):
    payload = {
        "name": "Jane Doe"
    }
    response = client.post('/api/contact', json=payload)
    assert response.status_code == 400
    data = json.loads(response.data)
    assert 'error' in data
    assert 'messages' in data
    assert 'email' in data['messages']
    assert 'subject' in data['messages']
    assert 'message' in data['messages']

def test_contact_invalid_email(client, db_session):
    payload = {
        "name": "Jane Doe",
        "email": "not-an-email",
        "subject": "Inquiry",
        "message": "Hello, I want to work with you."
    }
    response = client.post('/api/contact', json=payload)
    assert response.status_code == 400
    data = json.loads(response.data)
    assert 'email' in data['messages']

def test_newsletter_subscribe(client, db_session):
    payload = {"email": "subscriber@example.com"}
    response = client.post('/api/newsletter', json=payload)
    assert response.status_code == 201
    data = json.loads(response.data)
    assert data['message'] == "Successfully subscribed to the newsletter"

def test_newsletter_duplicate(client, db_session):
    payload = {"email": "subscriber2@example.com"}
    client.post('/api/newsletter', json=payload)
    
    response2 = client.post('/api/newsletter', json=payload)
    assert response2.status_code == 200
    data = json.loads(response2.data)
    assert data['message'] == "You are already subscribed to the newsletter"

def test_newsletter_invalid_email(client, db_session):
    payload = {"email": "invalid-email"}
    response = client.post('/api/newsletter', json=payload)
    assert response.status_code == 400
    data = json.loads(response.data)
    assert 'email' in data['messages']
