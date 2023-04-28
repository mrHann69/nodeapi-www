const crypto = require('crypto');
const querystring = require('querystring');

const manageCipher = (req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { text, key } = querystring.parse(body);

      if (req.url === '/encrypt') {
        // Create a new AES-256 cipher using the encryption key
        const cipher = crypto.createCipher('aes-256-cbc', key);

        // Encrypt the plain text using the cipher
        let encryptedData = cipher.update(text, 'utf8', 'hex');
        encryptedData += cipher.final('hex');

        // Return the encrypted data and key as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          encryptedData,
          encryptionKey: key
        }));
      } else if (req.url === '/decrypt') {
        // Create a new AES-256 cipher using the encryption key
        const decipher = crypto.createDecipher('aes-256-cbc', key);

        // Decrypt the encrypted data using the cipher
        let decryptedData = decipher.update(text, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');

        // Return the decrypted data as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          decryptedData
        }));
      } else {
        res.writeHead(404);
        res.end();
      }
    });
  } else {
    res.writeHead(405);
    res.end();
  }
}
