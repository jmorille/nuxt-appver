import { deleteByCode, getCountries, updateCountry  } from "../../../repository/demo/countries";
import type { Country } from "../../../repository/demo/countries";


interface QueryInterface  {
    nom?: string;
    capitale?: string;
    continent?: string;
    languePrincipale?: string;
    monnaie?: string;
    faitMarquant?: string;}

defineRouteMeta({
    openAPI: {
        description: 'Update un pays', 
        parameters: [
            { in: "path", name: "code", required: false },
            { in: "query", name: "capitale", required: false },
            { in: "query", name: "nom", required: false },
            { in: "query", name: "faitMarquant", required: false },
        ],
        tags: [ 'Demo'],
    },
});



export default defineEventHandler((event) => {
    const  code   = getRouterParam(event, 'code');
    const { nom, faitMarquant, capitale }  = getQuery<QueryInterface>(event);
    const toUpdate: Country = {code, nom, faitMarquant, capitale };
    const updated = updateCountry(toUpdate);
    if (!updated) {
        throw createError({ statusCode: 404, message: 'Ressource non trouvée' });
    }  
    return updated;
  });