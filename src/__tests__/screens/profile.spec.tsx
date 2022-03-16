import react from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

test('check whether or not the correctly user input placeholder is showing', () => {
  const { getByPlaceholderText } = render(<Profile />);

  const inputName = getByPlaceholderText('Nome');

  expect(inputName).toBeTruthy();
});

test('check if user data has been loaded', () => {
  const { getByTestId } = render(<Profile />);

  const inputName = getByTestId('input-name');
  const inputSurname = getByTestId('input-surname');

  expect(inputName.props.value).toEqual('Allan');
  expect(inputSurname.props.value).toEqual('Duarte');
});

test('check if title render correctly', () => {
  const { getByTestId } = render(<Profile />);

  const textTitle = getByTestId('text-title');

  expect(textTitle.props.children).toContain('Perfil');
});
