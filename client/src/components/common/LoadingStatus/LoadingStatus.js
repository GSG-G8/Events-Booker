import React from 'react';
import { Spin, Result } from 'antd';

function LoadingStatus({ loaded, error, children }) {
  return (
    <div>
      {serverError ? (
        <Result
          status="500"
          title="500"
          subTitle="Something went Wrong, please try again later"
        />
      ) : isLoaded ? (
        <Spin size="large" className="loading" />
      ) : (
        children
        // <Table rowKey="mobile" columns={this.columns} dataSource={users} />
      )}
    </div>
  );
}

export default LoadingStatus;
