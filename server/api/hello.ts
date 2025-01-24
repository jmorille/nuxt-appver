
interface QueryInterface  {
    name: string;
}

defineRouteMeta({
    openAPI: {
        description: 'Hello World',
        parameters: [{ in: "query", name: "name", required: true }],
    },
});

export default defineEventHandler((event) => {
    const { name }  = getQuery<QueryInterface>(event);

    return {
      data: `Hello, ${name}!`
    }
  });