'use client'
import { Button, ConfigProvider, Space } from 'antd';
import styles from "./heroInput.module.scss"
const HeroInput = () => {

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
        <Button type="primary" block className={styles.button}>
          Reserva tu lugar
        </Button>
      </Space>
    </ConfigProvider>


  )
}

export default HeroInput