<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Corsiva vitrine PWA — contexte projet pour Claude Code

Avant toute session de code sur ce repo, lire la note Obsidian source de vérité :

`C:/Users/easy/Documents/Memoire-IA/Projets/Corsiva-sites-web.md`

Cette note contient :

- où sont stockés les sites Corsiva ;
- domaines de production ;
- workflow build/commit/push/Vercel ;
- architecture de la PWA reliée ;
- règles de liens vers la PWA ;
- pièges connus ;
- conventions favicon/logos.

Règles rapides :

- Ce repo est la vitrine publique : `https://app-corsiva.fr` et `https://www.app-corsiva.fr`.
- Le login réel est sur `https://pwa.app-corsiva.fr/login`; ne pas pointer les CTA vers `/login` sur la vitrine.
- Ne pas confondre avec la PWA `C:/Users/easy/Documents/Corsiva/Sites/corsiva-pwa-git`.
- Ne jamais afficher/committer `.env*`, tokens, mots de passe, hashes, cookies ou secrets.
- Après modification : `npm run build`, commit, push, attendre Vercel Ready, vérifier en prod.
- Si une information durable change, mettre à jour la note Obsidian `Projets/Corsiva-sites-web.md` en fin de séance.
