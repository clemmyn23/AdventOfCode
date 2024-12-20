export type Excuse<Detail extends Record<string, string>> = {
  new (
    arg1: Record<string, unknown> & Detail,
  ): `${string & keyof Detail}: ${string & Detail[string & keyof Detail]}`;
};
