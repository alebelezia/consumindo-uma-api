# Consumindo uma API com fetch e axios

1. Instale o pacote json-server com o npm no diretório consumindo-uma-api/api:
```
npm init -y
npm i json-server
```

2. Crie um arquivo db.json.

3. Altere o package.json:
```
  "scripts": {
    "start": "json-server --watch db.json --port 3003"
  }
```

4. Inicie o servidor (ficará disponível em http://localhost:3003):
```
npm start
```

5. Abra no browser o arquivo frontend/index.html
