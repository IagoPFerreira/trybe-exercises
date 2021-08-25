/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica se existe o campo Email', () => {
    const { getByLabelText } = render(<App />);
    const email = getByLabelText('Email');

    expect(email).toBeInTheDocument();
    expect(email.type).toBe('email');
  });

  it('Verificando se existe um botão de enviar', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');

    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
    expect(button.value).toBe('Enviar');
  });

  it('Verifica s existem dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  it('Verificando se o botão e o campo email estão funcionando', () => {
    const { getByTestId, getByLabelText } = render(<App />);

    const EMAIL_USER = 'email@email.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
