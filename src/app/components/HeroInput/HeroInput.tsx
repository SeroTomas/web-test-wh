'use client'
import { ConfigProvider, Input, Space } from 'antd';
import { useState, ChangeEvent } from 'react';
import styles from "./heroInput.module.scss"

const HeroInput = () => {

  const { Search } = Input;
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#3D8361',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#ffffff',
        },
      }}
    >
      <Space direction="vertical">
        <Search
          placeholder="Indica tu ciudad"
          allowClear
          enterButton="Buscar"
          size="middle"
          onChange={handleChange}
          value={inputValue}
        />
      </Space>
    </ConfigProvider>


  )
}

export default HeroInput