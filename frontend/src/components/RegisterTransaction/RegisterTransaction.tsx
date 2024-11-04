import { useForm } from 'react-hook-form';
import { Button, Form, Input, DatePicker, InputNumber, DatePickerProps, Space, Radio, Row, Col } from 'antd';
// import './RegisterTransaction.css';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterTransaction = (props: { addTransaction: any }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const today = new Date().toISOString().split("T")[0];

    const onSubmit = async (data: any) => {
        try {
            console.log(data)
            props.addTransaction(data);
            reset();
        } catch (error) {
        }
    }
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="registerComponent">
            <h2 className="título">Movimentações</h2>
            <Form layout='vertical' onFinish={onSubmit}
            >
                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item
                            name='value'
                            label="Valor"
                            rules={[{ required: true, message: 'O valor é obrigatório' }]}>
                            <InputNumber min={1} placeholder='Digite um valor' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name='date' label="Data">
                            <Space direction="vertical">
                                <DatePicker placeholder='Informe uma data' />
                            </Space>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name='observation' label="Observação">
                    <Input placeholder='Digite uma observação'></Input>
                </Form.Item>
                <Form.Item name='type' label="Tipo de Movimentação">
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