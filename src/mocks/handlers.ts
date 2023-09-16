import { rest } from 'msw';
import { petList } from './__mock__';

export function handlers() {
  return [rest.get('/pets', getPetList)];
}

const getPetList: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  return res(ctx.json(petList));
};
