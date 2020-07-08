const locs = {
    en: {
        app: {
            title: "Personnel Expenditure Scrutiny Tool",
            logo_alt: "Office of the Parliamentary Budget Officer Logo",
        },
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `## The purpose of this tool
            
The government’s largest operating cost is its staff – personnel spending accounts for roughly 60 per cent of federal government’s operating costs. 

While parliamentarians receive volumes of data on personnel spending in the Estimates, the Public Accounts and InfoBase, that data cannot readily and quantifiably address questions such as:
* Is spending growth mainly due to higher numbers of staff or higher spending per person?
* Which organizations are most contributing to the growth in staffing? 
* Which organizations are most contributing to the growth in per-person spending? 
* Are pay increases driven by growth in salaries and wages, or other forms of renumeration?

To assist parliamentarians’ scrutiny, the PBO has built an interactive tool that allows users to compare trends across time for overall government spending or a single department by: 
* Viewing overall historic spending trends for [operating](#/en/operating-overview--apercu-fonctionnement) and [personnel](#/en/personnel-overview--apercu-personnel) spending;
* Examining the various [types of remunerations](#/en/personnel-breakdown--repartition-personnel) that are part of the government's spending on personnel;
* Examining historic [employment trends](#/en/fte-numbers--nombres-etp) for full-time equivalents;
* Benchmarking between [similar departments](#/en/compare-similarity--comparer-similarites), or [self-selecting departments](https://pes.albert-io.com/#/en/compare-select--comparer-selection) for comparison. 

Our data can be displayed as an aggregate or on a per-full time equivalent (FTE) basis. 

Data in this tool is on a cash basis only. It is based on publicly available sources and reconciles to the Public Accounts of Canada and Departmental Results Reports. Some details are based on non-confidential data furnished by the Received General for Canada. Ultimately, PBO takes responsibility for all data in this tool, including errors and omissions (see [Notes](https://pes.albert-io.com/#/en/notes) for further information on the data and sources). 

For a summary of some of the key insights that can be discovered through this tool, please see the accompanying report [link]. 

## Instructions
Use the tabs at the top of the page to select different data and charts. Each page will prompt users to filter the information presented by a department and/or basis (total cash outlays or per full-time equivalent) that they would like to see the chart display in. Users can also change the year selected to see how trends have changed over time. This tool was created in Tableau and uses WAI-ARIA standards for keyboard navigation. The tool was designed for tablet and desktop, it may not render well on mobile. 

Data and the charts displayed can be downloaded directly from each page (see [instructions for the various download options](https://help.tableau.com/current/pro/desktop/en-us/export.htm)). The full database can be downloaded here [link]. All data is attributable to the PBO.

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
        notes: { title: "Notes" },
        welcome: {
            title: 'Introduction',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tristique nunc. Donec gravida ac mauris eu dapibus. Maecenas quis justo vulputate, malesuada magna id, auctor nisl. Fusce in ultricies augue, vel scelerisque diam. Vestibulum feugiat orci auctor nisl semper, eu consequat augue vestibulum. Ut ultrices sed turpis nec malesuada. Nulla iaculis et mauris nec molestie. Aenean consectetur purus risus, et varius ligula rhoncus ac. Pellentesque in arcu at mauris laoreet fermentum ut sit amet erat. Nam et justo libero. Aenean vitae rhoncus tellus. Donec quis ultricies libero. Sed ac molestie sapien. Aliquam tincidunt eget lacus quis placerat. Ut placerat libero ipsum, ut vestibulum augue posuere eu.

Aenean pulvinar nibh vel ex fringilla, vitae laoreet nibh lacinia. Sed semper tortor ac lacus commodo, in tristique enim fermentum. Vestibulum quis purus in risus ultrices convallis in id erat. Aliquam id luctus augue, ac ultrices ligula. Phasellus faucibus, magna vel ornare scelerisque, ante purus interdum lacus, a dapibus tortor ligula quis nulla. Quisque aliquet ornare quam nec mattis. Etiam eu lacinia nisl, sit amet rhoncus felis. Sed varius sagittis ipsum. Maecenas eu blandit eros. Curabitur semper vehicula leo, ut suscipit odio aliquam lacinia. Sed eget nulla vulputate, sodales mauris a, interdum tortor.

Proin vulputate nisl molestie vulputate convallis. Nam posuere facilisis scelerisque. Morbi semper, diam eget pretium imperdiet, risus est sagittis ex, et volutpat leo dolor vitae diam. Suspendisse potenti. In sit amet elementum leo. Aliquam vitae augue viverra felis varius molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet feugiat eros. Cras lorem magna, commodo vel lorem eu, condimentum mollis dui.
            
Nunc sed ipsum eget lectus tempor porttitor. Nulla quam augue, dapibus vitae auctor ut, dictum mattis enim. Morbi id lobortis ligula, non vehicula diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque feugiat magna eget dolor semper egestas. Proin congue purus hendrerit sapien molestie, sed porttitor libero mattis. Ut ac bibendum velit. Nunc faucibus, tortor non posuere blandit, purus felis venenatis magna, vitae aliquam lacus augue non sem. Nullam varius, ipsum a porta ornare, ante justo egestas erat, ac posuere eros risus nec augue. Sed a nisl eget sapien accumsan condimentum. Nunc sed sapien a sem consequat vulputate. Integer tempus, dolor et luctus feugiat, leo lectus sodales turpis, at cursus ex neque eget felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ut bibendum eros.
            
Curabitur consequat ipsum id finibus egestas. Donec efficitur bibendum mauris, non malesuada nibh tempus id. Integer blandit dui nunc. Aenean at metus nec nunc ornare consectetur. Nulla nisl lacus, sollicitudin eu feugiat sit amet, hendrerit ut erat. Duis viverra viverra diam a viverra. Phasellus ligula tellus, semper et mi eget, elementum aliquet lectus. Donec cursus quam et consequat accumsan. Aenean tincidunt elementum facilisis. Quisque malesuada augue sit amet libero mattis auctor non at velit. Ut ac justo urna. Aenean mollis mauris ullamcorper nisi varius, ac facilisis nibh auctor. Mauris urna urna, lacinia ac leo faucibus, tincidunt commodo arcu. In hac habitasse platea dictumst.`
        }
    }
}


export default locs;
