import { getCountries } from "../../repository/demo/countries";

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
    const countryFind = getCountries().filter( (item) => item.code == code);
    if (countryFind.length < 1) {
        throw createError({
            statusCode: 404,
            message: 'Ressource non trouvée'
          });
    }
    return countryFind[0];
  });