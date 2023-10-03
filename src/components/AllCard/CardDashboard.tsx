import React from 'react';
import { Card, Typography } from 'antd';

interface ICardDashboard {
  title: string;
  icon?: React.ReactNode;
  value?: string | number;
  children?: React.ReactNode;
}

function CardDashboard({ title, icon, value, children }: ICardDashboard) {
  return (
    <Card style={{ marginBottom: 10 }}>
      <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
        {title}
      </Typography>
      {value && (
        <Typography
          style={{
            fontWeight: 'bold',
            fontSize: 34,
            textAlign: 'center',
          }}
        >
          {value}
        </Typography>
      )}
      {children}
    </Card>
  );
}

export default CardDashboard;
