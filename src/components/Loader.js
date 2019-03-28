import React from 'react';
import { Row, Spin } from 'antd';

function Loader() {
  return (
    <Row style={{ textAlign: 'center', margin: 50 }}>
      <Spin size="large" tip="Searching..." />
    </Row>
  );
}

export default Loader;
