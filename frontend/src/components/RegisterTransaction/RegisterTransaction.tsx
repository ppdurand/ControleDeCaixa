import { useForm } from 'react-hook-form';
import { Button, Checkbox, Form, Input, DatePicker, InputNumber, DatePickerProps, Space, Radio } from 'antd';
import './RegisterTransaction.css';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterTransaction = (props: {addTransaction: any}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const today = new Date().toISOString().split("T")[0];

    const onSubmit = async (data: any) => {
        try {
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
            <Form onFinish={handleSubmit(onSubmit)} className='formulario'>
                <Form.Item label="value" className='value'>
                    <InputNumber min={1} placeholder='Digite um valor'/>
                </Form.Item>
                <Form.Item label="date">
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} placeholder='Informe uma data' />
                    </Space>
                </Form.Item>   
                <Form.Item label="observation">
                    <Input placeholder='Digite uma observação'></Input>
                </Form.Item>
                <Form.Item label="type">
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>Receita</Radio>
                        <Radio value={2}>Despesa</Radio>
                    </Space>
                </Radio.Group>

                </Form.Item>
            </Form>
        </div>
    )
}