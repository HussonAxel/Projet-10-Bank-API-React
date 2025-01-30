# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Reste à faire :

## - Gérer le système de connexion

## - Ajouter la fonctionnalité de rememberMe

## - Ajouter la fonctionnalité d'edit

    --> Afficher l'édit en appuyant sur le bouton edit
    --> Cacher le nom et prénom courant
    --> Afficher les input pour éditer le nom et prénom
    --> Afficher les boutons pour sauvegarder et annuler
    --> Afficher les boutons pour valider et annuler
    --> Envoyer les nouvelles données à l'API

## - Rendre l'affichage des noms et prénoms dynamique (Récupérer les données de l'utilisateur connecté via l'API)

## - Bloquer la page de transactions sans user logged in : DONE

## - Gérer les affichages d'erreurs de connexion

## - Afficher le prénom de l'utilisateur connecté au niveau du header

## - Afficher log-out au niveau du header lorsque l'utilisateur est connecté

## - Ecriture du swagger pour les endpoints de l'API suivant

    --> de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
    --> de visualiser les détails d'une transaction dans une autre vue ;
    --> d'ajouter, de modifier ou de supprimer des informations sur une transaction.

### Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

    - La méthode HTTP (ex. : GET, POST etc.)
    - La route (ex. : /store/inventory)
    - La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
    - Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
    Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

const fetchUserProfile = async (token: string, dispatch: AppDispatch) => {
try {
const response = await axios.post(
`${baseApi}/user/profile`,
{},
{
headers: {
Authorization: `Bearer ${token}`,
},
}
);

    const { firstName, lastName } = response.data.body;
    dispatch(setName({ firstName, lastName }));

} catch (error) {
console.error('Failed to fetch user profile:', error);
}
};
