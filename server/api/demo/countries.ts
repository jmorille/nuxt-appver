import {  getCountries } from "../../repository/demo/countries";
import type { Country } from "../../repository/demo/countries";

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
     const countries:Country[] = getCountries();
     setResponseHeader(event, 'Content-Type', 'application/json');
     setResponseHeader(event, 'X-Total-Count', `${countries.length}`); 
    return countries.map((item) => {
        const { code, nom} = item;
        return { code, nom};
    });
  });