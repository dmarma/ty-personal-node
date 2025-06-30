# ty-personal-node

This is a simple Node.js application with Express. Static files in the `public` folder are served as the web root. The `/` route displays `public/index.html` and `/portfolio` displays `public/portfolio.html`.

A `/webhook` endpoint is included for GitHub push events. When GitHub sends a `push` webhook, the server runs `git pull` to update the code. You will need to configure the webhook on your GitHub repository to point to `http://YOUR_SERVER/webhook`.

Run locally with:

```bash
npm install
node index.js
```

The server listens on port `3000` by default.
