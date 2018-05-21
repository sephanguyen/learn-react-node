import expect from 'expect';
import {authorFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedDorDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      expect(authorFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
