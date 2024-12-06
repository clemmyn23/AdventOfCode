const createRoute = <TRoute = unknown>(author: string, route: TRoute) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
