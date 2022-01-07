import { filterListById } from '../utils/utils';

it('foo filter list is work', () => {
  expect(filterListById([{ id: '2', isActive: false }], '1')).toEqual([{ id: '2', isActive: false }]);
});

it('foo filter list get warning', () => {
  expect(filterListById([{ id: '12', isActive: false }], '2')).toEqual([{ id: '12', isActive: false }]);
});

it('foo filter list get warning', () => {
  expect(filterListById([{ id: '14', isActive: false }], '3')).toEqual([{ id: '14', isActive: false }]);
});
