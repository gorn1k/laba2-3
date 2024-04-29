import React from 'react';
import Button from './components/Button';
import renderer from 'react-test-renderer';

test('Button renders correctly', () => {
  const component = renderer.create(<Button label="Click me" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button onClick event works correctly', () => {
  const onClickMock = jest.fn();
  const component = renderer.create(<Button label="Click me" onClick={onClickMock} />);
  
  // Находим кнопку в дереве компонента и вызываем событие onClick
  const buttonInstance = component.root.findByType('button');
  buttonInstance.props.onClick();
  
  // Проверяем, была ли вызвана функция onClick
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
