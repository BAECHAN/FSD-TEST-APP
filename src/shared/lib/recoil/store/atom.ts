import { atom, selector } from 'recoil';

export const counterAtom = atom<number>({
  key: 'counterAtom', // 유니크한 키
  default: 0, // 초기 값
});

export const counerStateSelector = selector<number>({
  key: 'counterSelector',
  get: ({ get }) => {
    return get(counterAtom);
  },
  set: ({ set }, newValue) => {
    set(counterAtom, newValue);
  },
});
