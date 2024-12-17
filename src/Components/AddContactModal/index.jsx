import { useState } from "react";
import { Button, Form, Input, message, Modal, Radio } from "antd";
import { handleCatch } from "../../common-utils";
import { addContact } from "../../api/contact";

const AddContact = (props) => {
    const { open, onClose } = props;
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        const payload = {
            primaryName: values.primaryName,
            salutation: values.salutation,
            displayName: values.displayName
        }
        if(values.companyName) payload.companyName = values.companyName;
        if(values.email) payload.email = values.email;
        if(values.phone) payload.phone = values.phone;
        try {
            await addContact(payload);
            message.success('Contact added successfully');
            closePopup();
        } catch (err) {
            handleCatch(err);
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        form.resetFields();
        onClose();
    }

    return (
        <Modal
            title="Add Contact"
            footer={null}
            loading={loading}
            open={open}
            onCancel={closePopup}
            styles={{ content: { padding: '10px' } }}
            style={{top: '50px'}}
        >
            <Form
                form={form}
                labelCol={{ xs: { span: 10 }, sm: { span: 8 } }}
                wrapperCol={{ xs: { span: 14 }, sm: { span: 16 } }}
                initialValues={{
                    salutation: 'Mr.'
                }}
                layout="horizontal"
                size="middle"
                style={{
                    maxWidth: 600,
                    margin: '20px 0 10px'
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="primaryName"
                    label="Name"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                    rules={[
                        {
                            required: true,
                            message: "Name is required"
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value && value.toUpperCase(),
                    })}
                >
                    <Input placeholder="Name" type="text" style={{ marginBottom: 0 }}/>
                </Form.Item>
                <Form.Item
                    name="salutation"
                    label="Salutation"
                >
                    <Radio.Group>
                        <Radio.Button value="Mr.">Mr.</Radio.Button>
                        <Radio.Button value="Mrs.">Mrs.</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="companyName"
                    label="Company Name"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                    getValueProps={(value) => ({
                        value: value && value.toUpperCase(),
                    })}
                >
                    <Input placeholder="Company Name" type="text" style={{ marginBottom: 0 }} />
                </Form.Item>
                <Form.Item
                    name="displayName"
                    label="Display Name"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                    rules={[
                        {
                            required: true,
                            message: "Display Name is required"
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value && value.toUpperCase(),
                    })}
                >
                    <Input placeholder="Display Name" type="text" style={{ marginBottom: 0 }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                >
                    <Input placeholder="Email" type="text" style={{ marginBottom: 0 }} />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'right' }}
                >
                    <Input placeholder="Phone Number" type="number" style={{ marginBottom: 0 }} />
                </Form.Item>
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>

            </Form>
        </Modal>
    );
};

export default AddContact;
