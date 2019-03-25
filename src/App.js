import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, PageHeader } from 'antd';
import Home from './screens/Home';
import Search from './screens/Search';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <PageHeader
          title="Leo's reads"
          subTitle="A list of Leovan Tavares' books"
        />
      </Header>
      <Content>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Content>
    </Layout>
  );
}

export default App;
