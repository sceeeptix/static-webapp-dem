# Azure Static Web App Demo

Eine Demo-Anwendung für Azure Static Web Apps mit Azure Functions Backend.

## Übersicht

Dieses Projekt demonstriert die Verwendung von Azure Static Web Apps mit einem serverless Backend über Azure Functions. Die Anwendung besteht aus:

- **Frontend**: Statische HTML/CSS/JavaScript Website mit TailwindCSS
- **Backend**: Azure Functions (Node.js) für API-Endpunkte
- **Hosting**: Azure Static Web Apps mit globalem CDN

## Features

- Moderne, responsive UI mit TailwindCSS
- Serverless API mit Azure Functions
- Automatisches HTTPS
- Globales CDN für schnelle Ladezeiten
- CI/CD Integration mit GitLab
- Kostenlose Hosting-Option verfügbar

## Projektstruktur

```
azure-staticwebapp-demo/
├── index.html                    # Hauptseite der Web App
├── script.js                     # Frontend JavaScript
├── staticwebapp.config.json      # Azure Static Web App Konfiguration
├── api/                          # Azure Functions Backend
│   ├── message/                  # Beispiel-Function
│   │   ├── function.json        # Function Konfiguration
│   │   └── index.js             # Function Code
│   ├── host.json                # Functions Host Konfiguration
│   └── package.json             # Node.js Dependencies
└── README.md
```

## Lokale Entwicklung

### Voraussetzungen

- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local)
- [Node.js](https://nodejs.org/) (LTS Version)
- Ein Webbrowser

### Frontend lokal testen

Öffne einfach die `index.html` Datei in deinem Browser oder verwende einen lokalen Webserver:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server
```

### Azure Functions lokal testen

```bash
cd api
npm install
func start
```

Die API ist dann unter `http://localhost:7071/api/message` erreichbar.

## Deployment zu Azure

### Option 1: Azure Portal

1. Gehe zum [Azure Portal](https://portal.azure.com)
2. Erstelle eine neue "Static Web App" Ressource
3. Verbinde dein GitLab Repository
4. Konfiguriere die Build-Einstellungen:
   - **App location**: `/`
   - **Api location**: `api`
   - **Output location**: `` (leer lassen)

### Option 2: Azure CLI

```bash
# Azure CLI installieren und anmelden
az login

# Static Web App erstellen
az staticwebapp create \
  --name azure-staticwebapp-demo \
  --resource-group <deine-resource-group> \
  --source https://gitlab.com/LouisKe/azure-staticwebapp-demo.git \
  --location "West Europe" \
  --branch main \
  --app-location "/" \
  --api-location "api" \
  --login-with-gitlab
```

### Automatisches Deployment

Nach der Verbindung mit GitLab wird automatisch ein CI/CD Workflow erstellt. Jeder Push zum `main` Branch löst ein automatisches Deployment aus.

## API Endpunkte

### GET/POST `/api/message`

Gibt eine Begrüßungsnachricht zurück.

**Query Parameter:**
- `name` (optional): Name für die Begrüßung

**Beispiel Request:**
```bash
curl https://deine-app.azurestaticapps.net/api/message?name=Azure
```

**Beispiel Response:**
```json
{
  "message": "Hallo Azure! Diese Nachricht kommt von Azure Functions.",
  "timestamp": "2024-12-12T07:51:00.000Z",
  "status": "success",
  "info": {
    "backend": "Azure Functions",
    "language": "JavaScript (Node.js)",
    "trigger": "HTTP"
  }
}
```

## Konfiguration

### staticwebapp.config.json

Die Datei `staticwebapp.config.json` enthält wichtige Konfigurationen:

- **Routes**: Routing-Regeln für die App
- **Navigation Fallback**: SPA-Routing Unterstützung
- **Global Headers**: Sicherheits-Header
- **MIME Types**: Content-Type Definitionen

## Sicherheit

Die App verwendet folgende Sicherheits-Header:

- Content Security Policy (CSP)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

## Weitere Ressourcen

- [Azure Static Web Apps Dokumentation](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure Functions Dokumentation](https://docs.microsoft.com/azure/azure-functions/)
- [TailwindCSS Dokumentation](https://tailwindcss.com/docs)

## Autor

Erstellt für M346 - Cloud Computing, Kantonsschule Frauenfeld

## Lizenz

Dieses Projekt ist für Bildungszwecke erstellt.
