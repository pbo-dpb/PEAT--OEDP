const locs = {
    en: {
        app: {
            title: "Personnel Expenditure Analysis Tool",
            logo_alt: "Office of the Parliamentary Budget Officer Logo",
        },
        nav: {
            database: {
                title: "Database",
                subtitle: "(.xlsx)",
                url: "/db-bdd.xlsx"
            },
            reports: [{
                title: "Report",
                subtitle: "Key Insights",
                url: "https://www.pbo-dpb.gc.ca/en/blog/news/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel",
                thumbnail: "/report_2020_thumbnail_en.png"
            }]
        },
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `## The purpose of this tool
            
The government’s largest operating cost is its staff – personnel spending accounts for roughly 60 per cent of federal government’s operating costs. 

While parliamentarians receive volumes of data on personnel spending in the Estimates, the Public Accounts and InfoBase, that data cannot readily and quantifiably address questions such as:
* Is spending growth mainly due to higher numbers of staff or higher spending per person?
* Are pay increases driven by growth in salaries and wages, or other forms of remuneration?
* Which organizations are most contributing to the growth in staffing? 
* Which organizations are most contributing to the growth in per-person spending? 

To assist parliamentarians’ scrutiny, the PBO has built an interactive tool that allows users to compare trends across time for overall government spending or a single department by: 
* Viewing overall historic spending trends for [operating](#/en/operating-overview--apercu-fonctionnement) and [personnel](#/en/personnel-overview--apercu-personnel) spending;
* Examining the various [types of remuneration](#/en/personnel-breakdown--repartition-personnel) that are part of the government's spending on personnel;
* Examining historic [employment trends](#/en/fte-numbers--nombres-etp) for full-time equivalents;
* Benchmarking between [similar departments](#/en/compare-similarity--comparer-similarites), or [self-selecting departments](#/en/compare-select--comparer-selection) for comparison. 

Our data can be displayed as an aggregate or on a per-full time equivalent (FTE) basis. 

Data in this tool is on a cash basis only. It is based on publicly available sources and reconciles to the Public Accounts of Canada and Departmental Results Reports. Some details are based on non-confidential data furnished by the Received General for Canada. Ultimately, PBO takes responsibility for all data in this tool, including errors and omissions (see [Notes](https://pes.albert-io.com/#/en/notes) for further information on the data and sources). 

For a summary of some of the key insights that can be discovered through this tool, please see the accompanying [report](https://www.pbo-dpb.gc.ca/en/blog/news/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel). 

## Instructions
Use the tabs at the top of the page to select different data and charts. Each page will prompt users to filter the information presented by a department and/or basis (total cash outlays or per full-time equivalent) that they would like to see the chart display in. Users can also change the year selected to see how trends have changed over time. This tool was created in Tableau and uses WAI-ARIA standards for keyboard navigation. The tool was designed for tablet and desktop, it may not render well on mobile. 

Data and the charts displayed can be downloaded directly from each page (see [instructions for the various download options](https://help.tableau.com/current/pro/desktop/en-us/export.htm)). The [full database](/db-bdd.xlsx) can be downloaded as a Microsoft Excel file. All data is attributable to the PBO.

---

## Tell us what you think
To receive support or to provide feedback please contact us at PBO-DPB@parl.gc.ca

`
        }
    },
    fr: {
        app: {
            title: "Outil d'examen des dépenses en personnel",
            logo_alt: "Logo du Bureau du directeur parlementaire du budget",
        },
        nav: {
            database: {
                title: "Base de données",
                subtitle: "(.xlsx)",
                url: "/db-bdd.xlsx"
            },
            reports: [
                {
                    title: "Rapport",
                    subtitle: "Principales constatations",
                    url: "https://www.pbo-dpb.gc.ca/en/blog/news/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel",
                    thumbnail: "/report_2020_thumbnail_fr.png"
                }
            ]
        },
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `## But de l’outil
            
Les coûts de fonctionnement les plus importants du gouvernement sont ses dépenses de personnel, qui représentent environ 60 % du tout.

Les parlementaires reçoivent de grandes quantités de données sur les dépenses de personnel, dans le Budget de dépenses, les Comptes publics et l’Infobase, mais ces données ne permettent pas de répondre facilement et de manière quantifiable des réponses, par exemple, aux questions suivantes :
* La croissance des dépenses tien-elle principalement à une augmentation du nombre d’employés ou à une augmentation des dépenses par employé?
* La croissance de la masse salariale est-elle le fruit d’une hausse des salaires et traitements, ou d’autres formes de rémunération?
* Quelles organisations contribuent le plus à l’augmentation du nombre d’employés? 
* Quelles organisations contribuent le plus à l’augmentation des dépenses par employé? 


Pour aider les parlementaires dans leur examen, le DPB a conçu un outil interactif qui permet aux utilisateurs de comparer l’évolution au fil du temps des dépenses du gouvernement dans son ensemble ou d’un seul ministère: 
* En consultant les tendances des dépenses totales de [fonctionnement](#/fr/operating-overview--apercu-fonctionnement) et de [personnel](#/fr/personnel-overview--apercu-personnel);
* En examinant les différents [types de rémunérations](#/fr/personnel-breakdown--repartition-personnel) qui font partie des dépenses du gouvernement en matière de personnel;
* Examinant des tendances historiques en matière d'emploi en ce qui concerne les [équivalents temps plein](#/fr/fte-numbers--nombres-etp);
* En procédant à une analyse comparative entre des [ministères similaires](#/fr/compare-similarity--comparer-similarites), ou [en sélectionnant certains ministères](#/fr/compare-select--comparer-selection). 

Les données peuvent être affichées globalement ou par nombre d’équivalents temps plein (ETP).

Les données contenues dans l’outil reposent sur les flux financiers uniquement. Elles proviennent de sources publiques et sont conciliées avec les Comptes publics du Canada et les rapports sur les résultats ministériels. Certains détails sont fondés sur des données non confidentielles fournies par le receveur général du Canada. Le DPB assume la responsabilité de toutes les données se trouvant dans l’outil, notamment les erreurs et les omissions (pour de plus amples renseignements sur les données et les sources, voir les [Notes](https://pes.albert-io.com/#/fr/notes). 

Pour avoir un aperçu des principaux renseignements que vous permet d’obtenir l’outil, voir le [rapport](https://www.pbo-dpb.gc.ca/fr/blog/news/RP-2021-021-S--personnel-expenditure-analysis-tool--outil-examen-depenses-en-personnel) connexe.

## Directives
Utilisez les onglets au haut de la page pour choisir différents graphiques et données. Un message apparaîtra sur chaque page demandant à l’utilisateur de filtrer l’information présentée par ministère ou type d’analyse (déboursés effectifs globaux ou nombre d’équivalents temps plein) qu’il veut obtenir. L’utilisateur peut également choisir une autre année pour voir l’évolution au fil du temps. L’outil a été créé dans le logiciel Tableau et utilise les normes WAI ARIA pour la navigation par clavier. Il a été conçu pour les tablettes et les ordinateurs de bureau et pourrait être difficile à consulter sur un téléphone cellulaire.

Les données et les graphiques affichés peuvent être téléchargés directement à partir de chaque page (voir les [directives relatives aux diverses options de téléchargement](https://help.tableau.com/current/pro/desktop/en-us/export.htm)). La [base de données complète](/db-bdd.xlsx) peut être téléchargée au format Microsoft Excel. Toutes les données sont du DPB.

---

## Qu’en pensez-vous?
Pour obtenir de l’aide ou nous faire part de vos commentaires, communiquez avec nous à l’adresse DPB-PBO@parl.gc.ca

`
        }
    }
}


export default locs;
