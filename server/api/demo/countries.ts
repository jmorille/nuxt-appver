import { getCountries } from "../../repository/demo/countries";

interface QueryInterface  {
    name: string;
}

defineRouteMeta({
    openAPI: {
        description: 'Liste de pays', 
        tags: [ 'Demo'],
    },
});



export default defineEventHandler((event) => {
    const { name }  = getQuery<QueryInterface>(event);

    return getCountries().map((item) => {
        const { code, nom} = item;
        return { code, nom};
    });
  });