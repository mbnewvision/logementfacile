# Vérification rapide du projet LogementFacile

Date de vérification : 2026-04-05 (UTC)

## ✅ Ce qui fonctionne

- Le backend démarre avec `npm start` dans `backend/`.
- L'API expose les routes `/`, `/test`, `/properties` (GET/POST).

## ❌ Ce qui ne va pas

### 1) Frontend impossible à lancer

- `npm start` dans `frontend/` échoue avec : `vite: not found`.
- Cause : `vite` n'est pas déclaré dans `frontend/package.json`.

### 2) Structure frontend incomplète

- Le dossier `frontend/` ne contient pas de `index.html`.
- Le dossier `frontend/src/` ne contient pas de point d'entrée React (`main.jsx`/`main.js`) pour monter `App`.
- Avec seulement `src/App.js`, même avec Vite installé, l'application ne peut pas s'exécuter normalement.

### 3) Dépôts `node_modules` versionnés

- `backend/node_modules` et `frontend/node_modules` sont présents dans le dépôt.
- Ce n'est pas bloquant à l'exécution locale, mais c'est une mauvaise pratique Git (repo très lourd, diffs bruyants, risques d'incohérence).

## ⚠️ Points à améliorer (non bloquants immédiats)

- Ajouter des scripts de qualité (`test`, `lint`, `build`) dans les `package.json`.
- Ajouter une validation des entrées côté backend sur `POST /properties`.

## Correctifs recommandés

1. Frontend
   - Ajouter `vite` (et éventuellement `@vitejs/plugin-react`) dans les dépendances/devDependencies.
   - Créer `frontend/index.html`.
   - Créer `frontend/src/main.jsx` avec `ReactDOM.createRoot(...).render(<App />)`.

2. Git hygiene
   - Ajouter un `.gitignore` (au minimum `node_modules/`, `.env`, logs).
   - Retirer les `node_modules` déjà suivis (`git rm -r --cached ...`).

3. Qualité
   - Ajouter scripts de test/lint/build pour automatiser les vérifications.
