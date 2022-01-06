import { filterListById } from '../utils/utils';

it('foo filter list is work', () => {
  expect(
    filterListById(
      [
        { id: '1', isActive: false },
        { id: '2', isActive: true },
      ],
      '2',
    ),
  ).toEqual([{ id: '1', isActive: false }]);
});

it('foo filter list get warning', () => {
  expect(
    filterListById(
      [
        { id: '12', isActive: false },
        { id: '13', isActive: true },
      ],
      '2',
    ),
  ).toEqual([{ id: '1', isActive: false }]);
});
