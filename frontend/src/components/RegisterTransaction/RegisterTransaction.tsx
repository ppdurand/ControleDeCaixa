import { useForm } from 'react-hook-form';
import { Button, Form, Input, DatePicker, InputNumber, DatePickerProps, Space, Radio, Row, Col } from 'antd';
// import './RegisterTransaction.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const RegisterTransaction = (props: { addTransaction: any }) => {
    const { formState: { errors }, reset } = useForm();
    const [form] = Form.useForm();

    const dateFormat = "DD/MM/YYYY";
    const onSubmit = async (data: any) => {
        try {
            console.log(data)
            props.addTransaction({ ...data });
            form.resetFields();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="registerComponent">
            <h2 className="título">Movimentações</h2>
            <Form layout='vertical' onFinish={onSubmit} form={form}>
                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item className='campo'
                            name='value'
                            label="Valor"
                            rules={[{ required: true, message: 'Informe o valor' }]}>
                            <InputNumber style={{ width: 200 }} min={1} placeholder='Digite um valor' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className='campo' name='date' label="Data"
                            rules={[{ required: true, message: 'Informe a data' }]}>

                            <DatePicker style={{ width: 200 }}
                                placeholder='Informe uma data' 
                                format={dateFormat}/>

                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name='observation' label="Observação">
                    <Input style={{ width: 430 }} placeholder='Digite uma observação'></Input>
                </Form.Item>
                <Form.Item name='type' label="Tipo de Movimentação"
                    rules={[{ required: true, message: "Selecione o tipo de movimentação" }]}>
                    <Radio.Group>
                        <Space direction="horizontal">
                            <Radio value='RECEITA'>Receita</Radio>
                            <Radio value='DESPESA'>Despesa</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Row justify='end'>
                    <Button type="primary" htmlType='submit'>Enviar</Button>
                </Row>
            </Form>

        </div>
    )
}