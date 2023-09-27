'use client';
import React from 'react';
import { Button, Card, Row, Col, Tabs, Avatar, Tag } from 'antd';
import { useGetDetailOrder } from './Hooks/useGetDetailOrder';
import { getLogin } from '@/utils/sessions';
import Loading from '../Loading';
import moment from 'moment';
import { formatRupiah } from '@/utils/utilitys';

export default function DetailOrder({ id_product }: { id_product: string }) {
  const { data, isLoading, isSuccess } = useGetDetailOrder({
    id: id_product,
    token: getLogin()?.token,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && isSuccess) {
    return (
      <div
        style={{
          fontSize: 20,
          fontWeight: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p>Your Order</p>

        <Row
          style={{
            marginTop: '1.5em',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#18181B',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginBottom: '1.5em',
                }}
              >
                Plan
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#2D2D2D',
                }}
              >
                {data.package_name}
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#18181B',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginBottom: '1.5em',
                }}
              >
                Total Users
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#2D2D2D',
                }}
              >
                1 x {formatRupiah(data.package_price.toString(), 'Rp.')}
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#18181B',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginBottom: '1.5em',
                }}
              >
                Total Price
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#2D2D2D',
                }}
              >
                {formatRupiah(data.package_price.toString(), 'Rp.')}
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#18181B',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginBottom: '1.5em',
                }}
              >
                Subtotal
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#2D2D2D',
                }}
              >
                Tax {data.package_tax}%
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          />
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#18181B',
                  fontSize: 14,
                  fontWeight: 'bolder',
                  marginBottom: '1.5em',
                }}
              >
                {formatRupiah(data.package_price.toString(), 'Rp.')}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#2D2D2D',
                }}
              >
                {formatRupiah(data.package_tax.toString(), 'Rp.')}
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 'bolder',
                  color: '#2D2D2D',
                }}
              >
                Total
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          />
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            style={{ marginTop: '1em' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: '#2D2D2D',
                  fontWeight: 'bolder',
                }}
              >
                {formatRupiah(data.package_price.toString(), 'Rp.')}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return <></>;
}
