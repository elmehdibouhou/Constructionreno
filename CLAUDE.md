# Règles pour Claude — Projet Constructionreno

## Branches & Git

- **Toujours travailler sur la branche `dev`.**
- **Ne jamais faire `git push` sauf si Mehdi le demande explicitement.**
- **Ne jamais changer de branche (`git checkout`) sauf si Mehdi le demande explicitement.**
- C'est Mehdi qui décide quand merger `dev` → `main` et quand pousser.
- Si un fichier est modifié, faire `git add` + `git commit` sur `dev` uniquement — pas de push.

## Stack

- Astro (static site generator)
- TinaCMS (visual CMS — admin sur /admin)
- Vercel (déploiement automatique depuis `main`)
- GitHub : branche `main` = production, branche `dev` = travail en cours
