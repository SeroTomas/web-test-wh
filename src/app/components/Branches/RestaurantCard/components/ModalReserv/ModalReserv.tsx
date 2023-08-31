'use client'
import styles from "./modalReserv.module.scss";
import { useState } from 'react';
import { Button, ConfigProvider, Modal, Steps } from 'antd';
import { ReservDate, PersonaInfo } from '@/app/components';

const ModalReserv = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const showModal = () => {
        setIsModalOpen(true);
        setCurrentStep(0)
    };

    const handleOk = () => {
        setCurrentStep(currentStep + 1)
        if (currentStep === 2) {
            setIsModalOpen(false);
            setCurrentStep(0)
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setCurrentStep(0);
    };

    return (

        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#9a8668',
                    borderRadius: 2,
                    colorText: '#252525',
                    paddingContentHorizontal: 30,

                    // Alias Token
                    colorBgContainer: '#ffffff0',
                },
            }}
        >

            <Button type="primary" onClick={showModal} size='large'>
                Reservar
            </Button>
            <Modal title="Haz tu reserva" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="ant-modal-content">
                    {
                        currentStep === 0 ? <PersonaInfo /> : currentStep === 1 ? <ReservDate/> : null


                    }
                </div>
            </Modal>
        </ConfigProvider>

    );
};

export default ModalReserv;