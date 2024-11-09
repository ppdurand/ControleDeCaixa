import { Button, Form, Input, DatePicker, InputNumber, DatePickerProps, Space, Radio, Row, Col } from 'antd';
import dayjs from 'dayjs';
import './RegisterTransaction.css';


export const RegisterTransaction = (props: { addTransaction: any }) => {

    const [form] = Form.useForm();

    const dateFormat = "DD/MM/YYYY";
    const today = new Date().toISOString().split("T")[0];
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
                            label={<span style={{fontWeight: 'bold'}}>Valor</span>}
                            rules={[{ required: true, message: 'Informe o valor' }]}>
                            <InputNumber className='input' style={{ width: 200 }} min={1} placeholder='Digite um valor' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className='campo' name='date' label={<span style={{fontWeight: 'bold'}}>Data</span>}
                            rules={[{ required: true, message: 'Informe a data' }]}>

                            <DatePicker className='input' style={{ width: 200 }}
                                placeholder='Informe uma data'
                                format={dateFormat} 
                                maxDate={dayjs(today, 'YYYY-MM-DD')}/>

                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item className='campo' name='observation' 
                label={<span style={{fontWeight: 'bold'}}>Observação</span>}>
                    <Input className='input' style={{ width: 400 }} placeholder=' Digite uma observação'></Input>
                </Form.Item>
                <Form.Item className='campo' name='type' 
                label={<span style={{fontWeight: 'bold'}}>Tipo de Movimentação</span>}
                    rules={[{ required: true, message: "Selecione o tipo de movimentação" }]}>
                    <Radio.Group>
                        <Space direction="horizontal">
                            <Radio value='RECEITA'>Receita</Radio>
                            <Radio value='DESPESA'>Despesa</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Row justify='end'>
                    <Button className='botao' type="primary" htmlType='submit'>Enviar</Button>
                </Row>
            </Form>

        </div >
    )
}