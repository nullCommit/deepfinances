import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020',
      amount: 'R$ 12.000,00',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '12/04/2020',
      amount: 'R$ 59,00',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      category: { name: 'casa', icon: 'shopping-bag' },
      date: '27/03/2020',
      amount: 'R$ 1.200,00',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/17691420?v=4',
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Allan</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de Abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de Abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de Abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
        ></TransactionList>
      </Transactions>
    </Container>
  );
}
