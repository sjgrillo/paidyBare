import React from 'react';
import { render } from '@testing-library/react-native';
import { NewTodoItemButton } from '../NewTodoItemButton';
import store from '../../redux/store';
import { Provider } from 'react-redux';

describe('NewTodoItemButton', () => {
  jest.mock('react-redux', () => ({
    ...jest.requireActual<any>('react-redux'),
    useDispatch: jest.fn().mockReturnValue({}),
  }));

  it('NewTodoItemButton should render correctly', () => {
    const newTodoElement = render(
      <Provider store={store}>
        <NewTodoItemButton />
      </Provider>
    );
    const { queryAllByTestId } = newTodoElement;
    const view = queryAllByTestId('newTodoView');
    const textInputId = queryAllByTestId('textInputId');
    const submitBtnId = queryAllByTestId('submitBtnId');

    expect(view).toBeDefined();
    expect(textInputId).toBeDefined();
    expect(submitBtnId).toBeDefined();
  });
});
