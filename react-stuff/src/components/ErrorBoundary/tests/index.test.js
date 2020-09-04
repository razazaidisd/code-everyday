import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentHasError from '../../../ComponentHasError';

test('Should catch the error and display', async () => {
  const { getByText, getByTestId } = render(<ComponentHasError />);
  fireEvent.click(getByText('click to explode'));
  expect(getByText('This is a component that can have Error')).toBeInTheDocument();

});
