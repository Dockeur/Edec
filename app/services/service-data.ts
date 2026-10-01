export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  concerned: string;
  definition: string;
  steps: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "etude-impact",
    number: "01",
    title: "Etudes d’Impact Environnemental et Social (EIES)",
    shortTitle: "Etudes d’impact environnemental et social",
    summary: "Mesurer les effets d’un projet sur son environnement et construire une trajectoire de mise en œuvre responsable.",
    concerned: "Les promoteurs, entreprises, collectivités et porteurs de projets soumis à une évaluation environnementale.",
    definition: "L’EIES est un examen systématique des effets favorables et défavorables susceptibles d’être causés par un projet sur l’environnement. Elle permet d’éviter, d’atténuer, d’éliminer ou de compenser les effets néfastes sur l’environnement.",
    steps: [
      "Elaboration des termes de référence",
      "Analyse du cadre réglementaire et institutionnel du secteur d’activité",
      "Exécution de l’étude sur site à base de questionnaires",
      "Description du milieu biophysique, socio-économique et humain",
      "Prélèvements et analyses par un laboratoire agréé",
      "Enquêtes socio-économiques et consultations publiques",
      "Identification et évaluation des impacts potentiels",
      "Définition des mesures d’atténuation ou de bonification",
      "Elaboration du plan de gestion environnementale et sociale",
      "Production du rapport final",
    ],
    deliverables: ["Rapport d’étude", "Plan de gestion environnementale et sociale", "Matrice des impacts et mesures", "Dossier réglementaire complet"],
  },
  {
    slug: "audit-environnemental-social",
    number: "02",
    title: "Audits Environnementaux et Sociaux (AES)",
    shortTitle: "Audits environnementaux et sociaux",
    summary: "Évaluer objectivement les activités et le système de gestion d’une organisation déjà fonctionnelle.",
    concerned: "Les entreprises, établissements et installations en activité qui souhaitent maîtriser leurs écarts et améliorer leur conformité.",
    definition: "L’AES est une évaluation systématique, documentée et objective des activités, du fonctionnement et du système de gestion environnementale d’une entité, en vue de s’assurer de la protection de l’environnement.",
    steps: [
      "Elaboration des termes de référence",
      "Vérification de la conformité des activités avec les règlements et conventions en vigueur",
      "Exécution de l’audit sur site à base de questionnaires",
      "Analyse des milieux biophysique, socio-économique et humain",
      "Prélèvements et analyses par un laboratoire agréé",
      "Enquêtes socio-économiques et consultation des parties prenantes",
      "Identification et évaluation des impacts réels",
      "Définition des mesures d’atténuation ou de bonification",
      "Elaboration du plan de gestion environnementale et sociale",
      "Production du rapport final",
    ],
    deliverables: ["Rapport d’audit", "Registre des écarts et risques", "Plan d’actions correctives", "Recommandations de mise en conformité"],
  },
  {
    slug: "notice-impact",
    number: "03",
    title: "Notice d’Impact Environnemental (NIE)",
    shortTitle: "Notice d’impact environnemental",
    summary: "Constituer un dossier clair et conforme pour les projets dont les impacts nécessitent une évaluation proportionnée.",
    concerned: "Les porteurs de projets soumis à une notice d’impact selon la nature, la taille ou la localisation de leurs activités.",
    definition: "La NIE présente les caractéristiques d’un projet, son environnement d’accueil, ses impacts prévisibles et les mesures prévues pour les maîtriser, dans un format adapté aux exigences administratives applicables.",
    steps: [
      "Cadrage du projet et collecte des pièces disponibles",
      "Analyse du site et de son environnement",
      "Identification des impacts et des risques principaux",
      "Définition des mesures de prévention et d’atténuation",
      "Préparation du plan de gestion et du programme de suivi",
      "Constitution et dépôt du dossier réglementaire",
    ],
    deliverables: ["Notice d’impact environnemental", "Mesures de gestion et de suivi", "Dossier de demande prêt au dépôt"],
  },
  {
    slug: "pges",
    number: "04",
    title: "Mise en œuvre des Plans de Gestion Environnementale et Sociale (PGES)",
    shortTitle: "Mise en œuvre des PGES",
    summary: "Passer des engagements du dossier réglementaire à des actions suivies et mesurables sur le terrain.",
    concerned: "Les maîtres d’ouvrage et responsables de projets disposant d’un plan de gestion à déployer.",
    definition: "Le PGES traduit les mesures environnementales et sociales d’un projet en responsabilités, indicateurs, échéances et moyens opérationnels. EDEC accompagne sa mise en œuvre et son amélioration continue.",
    steps: [
      "Relecture du PGES et des engagements du projet",
      "Planification des actions, responsabilités et échéances",
      "Accompagnement des équipes et des sous-traitants",
      "Suivi des indicateurs et contrôle de l’application des mesures",
      "Reporting, actions correctives et amélioration continue",
    ],
    deliverables: ["Tableau de suivi des engagements", "Rapports de suivi environnemental et social", "Plans d’actions correctives", "Appui aux réunions de pilotage"],
  },
  {
    slug: "sensibilisation-communautaire",
    number: "05",
    title: "Campagne d’information et de sensibilisation communautaire",
    shortTitle: "Sensibilisation communautaire",
    summary: "Créer un dialogue utile entre les projets, les communautés et les parties prenantes locales.",
    concerned: "Les projets ayant un impact sur les populations riveraines, les collectivités et les acteurs locaux.",
    definition: "Les campagnes d’information et de sensibilisation facilitent la compréhension des enjeux, favorisent l’adhésion et renforcent la concertation autour des projets.",
    steps: [
      "Identification des parties prenantes et des enjeux locaux",
      "Préparation des supports et messages adaptés",
      "Organisation des réunions d’information et consultations",
      "Collecte et analyse des préoccupations exprimées",
      "Restitution et suivi des engagements pris",
    ],
    deliverables: ["Plan de communication communautaire", "Supports de sensibilisation", "Comptes rendus des consultations", "Rapport de participation"],
  },
  {
    slug: "permis-environnementaux",
    number: "06",
    title: "Elaboration des permis environnementaux",
    shortTitle: "Permis environnementaux",
    summary: "Sécuriser les démarches administratives nécessaires à l’autorisation et à la déclaration des activités.",
    concerned: "Les organisations qui doivent obtenir, renouveler ou compléter une autorisation environnementale.",
    definition: "EDEC prépare les dossiers de demandes d’autorisation ou de déclaration en rassemblant les éléments techniques, réglementaires et administratifs nécessaires à leur instruction.",
    steps: [
      "Qualification de la procédure applicable",
      "Vérification des pièces et des exigences du dossier",
      "Production des études et documents techniques nécessaires",
      "Constitution, contrôle et dépôt de la demande",
      "Suivi des échanges avec l’administration jusqu’à la décision",
    ],
    deliverables: ["Dossier administratif complet", "Pièces techniques et justificatives", "Suivi de l’instruction", "Appui aux demandes de compléments"],
  },
  {
    slug: "etude-danger-plan-urgence",
    number: "07",
    title: "Etudes de dangers et Plans d’urgence",
    shortTitle: "Etudes de dangers et plans d’urgence",
    summary: "Identifier les scénarios accidentels et préparer une réponse organisée face aux situations critiques.",
    concerned: "Les installations présentant des risques pour les personnes, les biens ou l’environnement et les exploitants concernés par la prévention des accidents.",
    definition: "L’étude de dangers identifie les phénomènes dangereux, évalue leurs conséquences et définit les mesures de prévention et de protection. Le plan d’urgence organise les actions à conduire en cas d’incident ou d’accident.",
    steps: [
      "Inventaire des installations, produits et situations à risque",
      "Identification des phénomènes dangereux et scénarios accidentels",
      "Analyse des conséquences et des barrières de sécurité",
      "Définition des mesures de prévention et de protection",
      "Elaboration et test du plan d’urgence",
      "Formation des équipes et amélioration du dispositif",
    ],
    deliverables: ["Etude de dangers", "Cartographie des risques", "Plan d’urgence", "Fiches réflexes et programme d’exercices"],
  },
  {
    slug: "dossiers-autorisation-declaration",
    number: "08",
    title: "Dossiers de demandes d’autorisation ou de déclaration",
    shortTitle: "Dossiers d’autorisation et de déclaration",
    summary: "Transformer les exigences réglementaires en un dossier lisible, complet et prêt à être instruit.",
    concerned: "Les entreprises et promoteurs qui doivent déclarer une activité ou solliciter une autorisation auprès des administrations compétentes.",
    definition: "EDEC accompagne la préparation des dossiers d’autorisation ou de déclaration, depuis l’analyse de la procédure jusqu’au suivi des échanges avec les services instructeurs.",
    steps: [
      "Analyse de l’activité et du régime administratif applicable",
      "Collecte des informations auprès du client et sur site",
      "Rédaction des pièces techniques et administratives",
      "Contrôle de cohérence et constitution du dossier",
      "Dépôt, suivi de l’instruction et réponse aux observations",
    ],
    deliverables: ["Dossier de demande ou de déclaration", "Note technique et pièces justificatives", "Tableau de suivi de l’instruction"],
  },
  {
    slug: "formations-qhse",
    number: "09",
    title: "Formations QHSE",
    shortTitle: "Formations QHSE",
    summary: "Renforcer les compétences des équipes pour prévenir les risques et faire vivre la conformité au quotidien.",
    concerned: "Les entreprises, collectivités et équipes souhaitant développer leurs compétences en qualité, hygiène, sécurité et environnement.",
    definition: "EDEC propose des formations adaptées au contexte des organisations, en QHSE, environnement, sécurité, prévention des risques et management de la conformité.",
    steps: [
      "Analyse des besoins et du niveau des participants",
      "Conception d’un programme adapté aux activités",
      "Animation des sessions avec cas pratiques",
      "Evaluation des acquis et retours des participants",
      "Remise des supports et recommandations de progression",
    ],
    deliverables: ["Programme pédagogique", "Supports de formation", "Evaluation des acquis", "Attestations de participation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
