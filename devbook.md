# 📘 Devbook – Site Vitrine Yoga Studio

## 🧘‍♀️ Objectif

Créer un site vitrine **sobre, élégant et apaisant** pour un studio de yoga basé à Toulouse.  
Le design s'inspire d'une ambiance zen : couleurs naturelles, typographie raffinée, photos immersives en pleine largeur.

## 🛠️ Technologies imposées

- **Astro** (structure du site)
- **Tailwind CSS** (design)
- **TypeScript** (optionnel, recommandé)
- **Netlify** ou **Vercel** pour le déploiement

## 🎯 Structure des sections attendue (toutes en composants Astro réutilisables)

- **Hero Section** : grande image de fond avec overlay, titre principal "Bienvenue dans votre espace de bien-être", sous-titre accrocheur
- **À propos** : présentation du studio, valeurs, approche
- **Services** : cartes présentant les différents types de cours (Hatha, Vinyasa, Yin, etc.)
- **Planning** : emploi du temps interactif des cours
- **Tarifs** : présentation claire des différentes formules et abonnements
- **Contact** : formulaire de contact + coordonnées + carte
- **Footer** : mentions légales, réseaux sociaux, newsletter

## 🎨 Style visuel

- **Thème zen** : couleurs naturelles et apaisantes
- **Palette** :
  - Fond : `#fdfaf6` (ivoire doux)
  - Texte : `#1a1a1a` (noir doux)
  - Accent : `#c2a97e` (ocre clair), `#a3745c` (terre cuite)
- **Typographie** :
  - Titres : Playfair Display ou Cormorant
  - Texte : Inter ou Open Sans
- **Design responsive et épuré**

## 📁 Structure de fichiers souhaitée (dans src/)

```
components/
  Navbar.astro
  HeroSection.astro
  AboutSection.astro
  ServicesSection.astro
  PlanningSection.astro
  PricingSection.astro
  ContactSection.astro
  Footer.astro
layouts/
  BaseLayout.astro
pages/
  index.astro
  planning.astro
  tarifs.astro
  contact.astro
styles/
  global.css
```

## 🚀 Lancement du projet

1. Initialiser un projet Astro avec `npm create astro@latest`
2. Ajouter Tailwind CSS
3. Créer la structure de base des composants
4. Développer les pages principales
5. Intégrer le contenu et les images
6. Optimiser pour le responsive
7. Déployer sur Netlify ou Vercel

## ✅ Critères de qualité

- Code propre, commenté et modulaire
- Design responsive et accessible
- Performance optimisée
- SEO de base (meta tags, sitemap)
- Formulaire de contact fonctionnel
- Intégration de Google Maps
- Optimisation des images