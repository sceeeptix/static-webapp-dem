// API Test Funktion
async function testAPI() {
    const resultDiv = document.getElementById('apiResult');
    const responseDiv = document.getElementById('apiResponse');
    
    resultDiv.classList.remove('hidden', 'bg-green-50', 'bg-red-50');
    responseDiv.textContent = 'Lade...';
    
    try {
        // Teste die API - passe den Endpoint an deine Azure Function an
        const response = await fetch('/api/message');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Erfolgreiche Antwort
        resultDiv.classList.add('bg-green-50');
        responseDiv.textContent = JSON.stringify(data, null, 2);
        
    } catch (error) {
        // Fehler behandeln
        resultDiv.classList.add('bg-red-50');
        responseDiv.textContent = `Fehler: ${error.message}\n\nHinweis: Die API ist noch nicht konfiguriert. Erstelle Azure Functions im /api Ordner.`;
    }
    
    resultDiv.classList.remove('hidden');
}

// Ergebnis löschen
function clearResult() {
    const resultDiv = document.getElementById('apiResult');
    resultDiv.classList.add('hidden');
}

// Beispiel: Daten beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    console.log('Azure Static Web App geladen!');
    console.log('Bereit für Azure Functions Backend Integration');
});
