import React from 'react';
import { TodoItem, todoItemProps } from '../TodoItem';
import { TodoObject } from '../../redux/types';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('TodoItem', () => {
  // jest.mock('react-redux', () => ({
  //   ...jest.requireActual<any>('react-redux'),
  //   useDispatch: jest.fn().mockReturnValue({}),
  // }));

  it('todoItem should render correctly', () => {
    const props: todoItemProps = {
      obj: { text: 'example' } as TodoObject,
      index: 1,
    };

    const TodoElement = render(
      <Provider store={store}>
        <TodoItem obj={props.obj} index={props.index} />
      </Provider>
    );
    const { queryAllByTestId } = TodoElement;
    const view = queryAllByTestId('todoView');
    const mainBtn = queryAllByTestId('mainBtnId');
    const exitBtn = queryAllByTestId('exitBtnId');

    expect(view).toBeDefined();
    expect(mainBtn).toBeDefined();
    expect(exitBtn).toBeDefined();
  });
});
