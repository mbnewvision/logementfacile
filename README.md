# LogementFacile FINAL

## Backend (Railway)

```bash
cd backend
npm install
npm start
```

Railway:
- Root directory = `backend`
- Add `DATABASE_URL`

## Frontend (déploiement séparé - Option A)

```bash
cd frontend
npm install
npm start
```

Variables d'environnement frontend:
- copier `frontend/.env.example` vers `frontend/.env`
- définir `VITE_API_URL` vers l'URL publique du backend Railway

Exemple:

```env
VITE_API_URL=https://logementfacile-production.up.railway.app
```

Le frontend doit être hébergé séparément (Vercel/Netlify/Railway service dédié), puis consommer l'API backend via `VITE_API_URL`.

## Déploiement Vercel (frontend)

Pour le projet `logementfacile` sur Vercel:

1. Ouvrir le projet Vercel et cliquer **Connect Git**.
2. Configurer:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Ajouter la variable d'environnement:
   - `VITE_API_URL=https://logementfacile-production.up.railway.app`
4. Lancer un déploiement Production.

Si vous voyez encore l'API au lieu du frontend, c'est que vous ouvrez l'URL Railway (backend) et non l'URL Vercel (frontend).
