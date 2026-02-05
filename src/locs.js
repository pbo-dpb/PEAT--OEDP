const locs = {
    en: {
        app: {
            title: "Personnel Expenditure Analysis Tool",
            logo_alt: "Office of the Parliamentary Budget Officer Logo",
        },
        mobile_warning: "This tool is optimized for use on a computer or tablet.",
        nav: {
            database: {
                title: "Database",
                subtitle: "(.xlsx)",
            },
            reports: [
                {
                    title: "Additional Analysis",
                    subtitle: "2023-24 Personnel Expenditures",
                    url: "https://www.pbo-dpb.ca/en/additional-analyses--analyses-complementaires/BLOG-2425-009--personnel-expenditure-analysis-tool-update-2023-24-personnel-expenditures--mise-jour-outil-analyse-depenses-personnel-depenses-personnel-2023-2024",
                }, {
                    title: "Additional Analysis",
                    subtitle: "2022-23 Personnel Expenditures",
                    url: "https://www.pbo-dpb.ca/en/additional-analyses--analyses-complementaires/BLOG-2324-005--personnel-expenditure-analysis-tool-update-2022-23-personnel-expenditures--mise-jour-outil-analyse-depenses-personnel-depenses-personnel-2022-2023",
                },
                {
                    title: "Report",
                    subtitle: "Update (2023)",
                    url: "https://www.pbo-dpb.ca/en/publications/RP-2324-002-S--personnel-expenditure-analysis-update--examen-depenses-personnel-mise-jour",
                    thumbnail: "report_2023_thumbnail_en.png"
                },
                {
                    title: "Report",
                    subtitle: "Key Insights (2020)",
                    url: "https://www.pbo-dpb.ca/en/publications/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel",
                    thumbnail: "report_2020_thumbnail_en.png"
                }]
        },
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `## The purpose of this tool
            
The government’s largest operating cost is its staff – personnel spending (on a cash basis) accounts for roughly 54  per cent of federal government’s operating costs.

While parliamentarians receive volumes of data on personnel spending in the [Estimates](https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/government-expenditure-plan-main-estimates.html), the [Public Accounts](https://www.tpsgc-pwgsc.gc.ca/recgen/cpc-pac/index-eng.html) and [InfoBase](https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html), that data cannot readily and quantifiably address questions such as:
* Is spending growth mainly due to higher numbers of staff or higher spending per person?
* Are pay increases driven by growth in salaries and wages, or other forms of compensation?
* Which organizations are most contributing to the growth in staffing? 
* Which organizations are most contributing to the growth in per-person spending? 

To assist parliamentarians’ scrutiny, PBO built an interactive tool that allows users to compare trends across time for overall government spending or a single department by: 
* Viewing overall historic spending trends for [operating](#/operating-overview--apercu-fonctionnement) and [personnel](#/personnel-overview--apercu-personnel) spending;
* Examining the various [types of compensation](#/personnel-breakdown--repartition-personnel) that are part of the government's spending on personnel;
* Examining historic [employment trends](#/fte-numbers--nombres-etp) for full-time equivalents;
* Benchmarking between [similar departments](#/compare-similarity--comparer-similarites), or [self-selecting departments](#/compare-select--comparer-selection) for comparison. 

Our data can be displayed as an aggregate or on a per-full time equivalent (FTE) basis. 

Data in this tool is on a cash basis only. It is based on publicly available sources and reconciles to the Public Accounts of Canada and Departmental Results Reports. Some details are based on non-confidential data furnished by the Receiver General for Canada. Ultimately, PBO takes responsibility for all data in this tool, including errors and omissions (see [Notes](#/notes) for further information on the data and sources). 

A summary of some of the key insights that can be discovered through this tool can be found in the report's list.

## Instructions
Use the tabs at the top of the page to select different data and charts. Each page will prompt users to filter the information presented by a department and/or basis (total cash outlays or per full-time equivalent) that they would like to see the chart display in. Users can also change the year selected to see how trends have changed over time. This tool was created in Tableau and uses WAI-ARIA standards for keyboard navigation. The tool was designed for tablet and desktop, it may not render well on mobile. 

Data and the charts displayed can be downloaded directly from each page (see [instructions for the various download options](https://help.tableau.com/current/pro/desktop/en-us/export.htm)). The full database can be downloaded as a Microsoft Excel file. All data is attributable to the PBO.
`
        }
    },
    fr: {
        app: {
            title: "Outil d'examen des dépenses en personnel",
            logo_alt: "Logo du Bureau du directeur parlementaire du budget",
        },
        mobile_warning: "Cet outil est optimisé pour être utilisé sur un ordinateur ou une tablette.",
        nav: {
            database: {
                title: "Base de données",
                subtitle: "(.xlsx)",
            },
            reports: [
                {
                    title: "Analyse complémentaire",
                    subtitle: "Dépenses en personnel de 2023-2024",
                    url: "https://www.pbo-dpb.ca/fr/additional-analyses--analyses-complementaires/BLOG-2425-009--personnel-expenditure-analysis-tool-update-2023-24-personnel-expenditures--mise-jour-outil-analyse-depenses-personnel-depenses-personnel-2023-2024",
                }
                ,
                {
                    title: "Analyse complémentaire",
                    subtitle: "Dépenses en personnel de 2022-2023",
                    url: "https://www.pbo-dpb.ca/fr/additional-analyses--analyses-complementaires/BLOG-2324-005--personnel-expenditure-analysis-tool-update-2022-23-personnel-expenditures--mise-jour-outil-analyse-depenses-personnel-depenses-personnel-2022-2023",
                },
                {
                    title: "Rapport",
                    subtitle: "Mise à jour (2023)",
                    url: "https://www.pbo-dpb.ca/fr/publications/RP-2324-002-S--personnel-expenditure-analysis-update--examen-depenses-personnel-mise-jour",
                    thumbnail: "report_2023_thumbnail_fr.png"
                },
                {
                    title: "Rapport",
                    subtitle: "Principales constatations (2020)",
                    url: "https://www.pbo-dpb.ca/fr/publications/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel",
                    thumbnail: "report_2020_thumbnail_fr.png"
                }
            ]
        },
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `## But de l’outil
            
Les coûts de fonctionnement les plus importants du gouvernement sont ses dépenses de personnel (sur la base de la comptabilité de caisse), qui représentent environ 54 % du tout.

Les parlementaires reçoivent de grandes quantités de données sur les dépenses de personnel, dans le [Budget de dépenses](https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/plan-depenses-budget-principal.html), les [Comptes publics](https://www.tpsgc-pwgsc.gc.ca/recgen/cpc-pac/index-fra.html) et l’[Infobase](https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#), mais ces données ne permettent pas de répondre facilement et de manière quantifiable des réponses, par exemple, aux questions suivantes :
* La croissance des dépenses tient-elle principalement à une augmentation du nombre d’employés ou à une augmentation des dépenses par employé?
* La croissance de la masse salariale est-elle le fruit d’une hausse des salaires et traitements, ou d’autres formes de rémunération?
* Quelles organisations contribuent le plus à l’augmentation du nombre d’employés? 
* Quelles organisations contribuent le plus à l’augmentation des dépenses par employé? 


Pour aider les parlementaires dans leur examen, le DPB a conçu un outil interactif qui permet aux utilisateurs de comparer l’évolution au fil du temps des dépenses du gouvernement dans son ensemble ou d’un seul ministère : 
* En consultant les tendances des dépenses totales de [fonctionnement](#/operating-overview--apercu-fonctionnement) et de [personnel](#/personnel-overview--apercu-personnel);
* En examinant les différents [types de rémunérations](#/personnel-breakdown--repartition-personnel) qui font partie des dépenses du gouvernement en matière de personnel;
* Examinant des tendances historiques en matière d'emploi en ce qui concerne les [équivalents temps plein](#/fte-numbers--nombres-etp);
* En procédant à une analyse comparative entre des [ministères similaires](#/compare-similarity--comparer-similarites), ou [en sélectionnant certains ministères](#/compare-select--comparer-selection). 

Les données peuvent être affichées globalement ou par nombre d’équivalents temps plein (ETP).

Les données contenues dans l’outil reposent sur les flux financiers uniquement. Elles proviennent de sources publiques et sont conciliées avec les Comptes publics du Canada et les rapports sur les résultats ministériels. Certains détails sont fondés sur des données non confidentielles fournies par le receveur général du Canada. Le DPB assume la responsabilité de toutes les données se trouvant dans l’outil, notamment les erreurs et les omissions (pour de plus amples renseignements sur les données et les sources, voir les [Notes](#/notes). 

Un résumé de certaines des informations clés pouvant être découvertes grâce à cet outil se trouve dans la liste des rapports.

## Directives
Utilisez les onglets au haut de la page pour choisir différents graphiques et données. Un message apparaîtra sur chaque page demandant à l’utilisateur de filtrer l’information présentée par ministère ou type d’analyse (déboursés effectifs globaux ou nombre d’équivalents temps plein) qu’il veut obtenir. L’utilisateur peut également choisir une autre année pour voir l’évolution au fil du temps. L’outil a été créé dans le logiciel Tableau et utilise les normes WAI ARIA pour la navigation par clavier. Il a été conçu pour les tablettes et les ordinateurs de bureau et pourrait être difficile à consulter sur un téléphone cellulaire.

Les données et les graphiques affichés peuvent être téléchargés directement à partir de chaque page (voir les [directives relatives aux diverses options de téléchargement](https://help.tableau.com/current/pro/desktop/en-us/export.htm)). La base de données complète peut être téléchargée au format Microsoft Excel. Toutes les données sont du DPB.
`
        }
    }
}


export default locs;
