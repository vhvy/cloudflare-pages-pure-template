interface Env {
  SOME_CODE: string
}


export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  return new Response(`Hello world!  ${env.SOME_CODE}`);
}