import { deleteByCode, getCountries  } from "../../../repository/demo/countries";
import type { Country } from "../../../repository/demo/countries";


interface QueryInterface  {
    name: string;
}

defineRouteMeta({
    openAPI: {
        description: 'GET un pays', 
        tags: [ 'Demo'],
    },
});



export default defineEventHandler((event) => {
    const  code   = getRouterParam(event, 'code');
    const deleted = deleteByCode(code);
    if (!deleted) {
        throw createError({ statusCode: 404, message: 'Ressource non trouvée' });
    } else {
        setResponseStatus(event, 204);
    }  
  });