from http.server import BaseHTTPRequestHandler
import json
import random

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        threats = ["Injection Cross-Site (XSS)", "Fuite WebRTC - IP Exposée", "Faille de Header de Sécurité", "Port Système 443 Vulnérable"]
        
        response = {
            "verdict": "VULNÉRABLE",
            "failles": [random.choice(threats)],
            "score": random.randint(15, 38)
        }
        self.wfile.write(json.dumps(response).encode())
