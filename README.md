# Chai-example Repo du TD TDD 

# Tests de fonctionnalités pour la classe Panier

## 1. Calcul du prix total du panier
   - Permet de voir le total du panier
   - Vérifie que le montant total du panier est correctement calculé.

## 2. Gestion du stock
   - Ajoute des articles au panier avec des quantités spécifiques.
   - Retire une certaine quantité d'un article du panier.
   - Vérifie que la quantité de l'article retiré est mise à jour correctement dans le panier.

## 3. Vidage du panier
   - Vide le panier.
   - Vérifie que le panier est vide après l'avoir vidé.

## 4. Test d'ajout au panier
   - Ajoute plusieurs articles au panier avec des quantités spécifiques.
   - Vérifie que les articles ajoutés sont correctement présents dans le panier.

## 5. Application de la remise sur un article spécifique
   - Ajoute des articles au panier avec des prix unitaires spécifiques et initialise une remise pour un article spécifique.
   - Calculer la remise pour un article spécifique et l'applique sur le panier.
   - Vérifie que le montant total du panier est correct après l'application de la remise sur l'article.

# Tests de fonctionnalités pour la classe Remise

## 1. Calcul du montant de la remise
   - Applique la remise sur le panier entier. ( A différencier d'un article spécifique )
   - Vérifie que le montant de la remise est correctement calculé.

## 2. Vérification de la remise supérieure à 100%
   - N'applique pas la remise car supérieur à 100% et vérifie que la remise est de 0.