import { useForm } from 'react-hook-form';
import { Button, Form, Input, DatePicker, InputNumber, DatePickerProps, Space, Radio, Row, Col } from 'antd';
// import './RegisterTransaction.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const RegisterTransaction = (props: { addTransaction: any }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const today = new Date().toISOString().split("T")[0];

    const onSubmit = async (data: any) => {
        try {
            console.log(data)
            props.addTransaction({ ...data, date: selectedDate });
            reset();
        } catch (error) {
            console.log(error)
        }
    }

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateConverter = (date: any) => {
        if (date) {
            const dateConverted = date.toDate()
            setSelectedDate(dateConverted)
            console.log(dateConverted);
        }
        else {
            setSelectedDate(null)
        }
    }

    return (
        <div className="registerComponent">
            <h2 className="título">Movimentações</h2>
            <Form layout='vertical' onFinish={onSubmit}>
                <Row gutter={10}>
                    <Col>
                        <Form.Item
                            name='value'
                            label="Valor"
                            rules={[{ required: true, message: 'Informe o valor' }]}>
                            <InputNumber min={1} placeholder='Digite um valor' />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name='date' label="Data"
                            rules={[{ required: true, message: 'Informe a data' }]}>

                            <DatePicker placeholder='Informe uma data'
                                onChange={handleDateConverter} />

                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name='observation' label="Observação">
                    <Input placeholder='Digite uma observação'></Input>
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
                <Row>
                    <Button type="primary" htmlType='submit'>Enviar</Button>
                </Row>
            </Form>

        </div>
    )
}