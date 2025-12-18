export const initialProjects = [
  {
    id: 1,
    title: "Projet Fullstack",
    tasks: [
      {
        id: 101,
        title: "Créer l'API utilisateur",
        user: "Backend",
        value: "CRUD complet pour les utilisateurs",
        status: "ready",
        estimate: 3,
        editing: false
      },
      {
        id: 102,
        title: "Développer le front React",
        user: "Frontend",
        value: "Pages et composants pour l'interface",
        status: "in-progress",
        estimate: 5,
        editing: false
      },
      {
        id: 103,
        title: "Tester l'intégration",
        user: "QA",
        value: "Vérifier le bon fonctionnement complet",
        status: "backlog",
        estimate: 2,
        editing: false
      }
    ]
  },
  {
    id: 2,
    title: "Projet Web",
    tasks: [
      {
        id: 201,
        title: "Design des pages web",
        user: "UI/UX",
        value: "Maquettes et wireframes",
        status: "done",
        estimate: 2,
        editing: false
      },
      {
        id: 202,
        title: "Développer le site HTML/CSS/JS",
        user: "Frontend",
        value: "Site responsive et interactif",
        status: "in-progress",
        estimate: 4,
        editing: false
      },
      {
        id: 203,
        title: "Mettre en place SEO",
        user: "SEO",
        value: "Optimisation référencement naturel",
        status: "backlog",
        estimate: 2,
        editing: false
      }
    ]
  },
  {
    id: 3,
    title: "Projet Chef de projet",
    tasks: [
      {
        id: 301,
        title: "Planifier la roadmap",
        user: "Product Owner",
        value: "Prioriser les fonctionnalités",
        status: "done",
        estimate: 3,
        editing: false
      },
      {
        id: 302,
        title: "Gérer l'équipe",
        user: "Chef de projet",
        value: "Suivi quotidien et coordination",
        status: "in-progress",
        estimate: 5,
        editing: false
      },
      {
        id: 303,
        title: "Suivre les indicateurs",
        user: "Chef de projet",
        value: "Rapports et KPIs",
        status: "backlog",
        estimate: 2,
        editing: false
      }
    ]
  }
]
