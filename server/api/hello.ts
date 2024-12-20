
interface QueryInterface  {
    name: string;
}

export default defineEventHandler((event) => {
    const { name }  = getQuery<QueryInterface>(event);

    return {
      data: `Hello, ${name}!`
    }
  });