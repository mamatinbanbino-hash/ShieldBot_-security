from http.server import BaseHTTPRequestHandler
import json
import random

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        threats = ["Vulnérabilité WebRTC", "Exposition Ports 80/443", "Certificat SSL Invalide", "Injection Browser"]
        
        response = {
            "verdict": "VULNÉRABLE",
            "failles": [random.choice(threats)],
            "engine": "Ndiaye Techn Core v2.2"
        }
        self.wfile.write(json.dumps(response).encode())
