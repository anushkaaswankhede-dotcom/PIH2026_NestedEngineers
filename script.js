const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Serve index.html for root or /index.html
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('index.html not found. Make sure index.html is in the same folder as server.js');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log('');
  console.log('  🌿 Carbon Watch India');
  console.log('  ─────────────────────────────────');
  console.log(`  ✅ Server running at: http://localhost:${PORT}`);
  console.log('  📌 Open this link in your browser');
  console.log('  Press Ctrl+C to stop the server');
  console.log('');
});
