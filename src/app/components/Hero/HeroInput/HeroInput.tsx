'use client'
import { Button, ConfigProvider, Space } from 'antd';
import styles from "./heroButton.module.scss"
import { useEffect } from 'react';

const HeroButton = () => {

  let targetSection : HTMLElement | null;

  useEffect(() => {
    targetSection = document.getElementById('branches');
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#9a8668',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#ffffff',
        },
      }}
    >
      <Space direction="vertical">
        <Button type="primary" block className={styles.button} onClick={() => { targetSection?.scrollIntoView({ behavior: 'smooth' }) }}>
          Reserva tu lugar
        </Button>
      </Space>
    </ConfigProvider>


  )
}

export default HeroButton