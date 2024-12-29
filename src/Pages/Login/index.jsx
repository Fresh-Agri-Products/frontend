import { handleCatch, screenHeight } from "../../common-utils";
import { ColFlex, StyledInput } from "../../Styled/Layout";
import { Button, Checkbox, Form } from "antd";
import { Lock, User } from "@phosphor-icons/react";
import HeaderComponent from "../../Components/Header";
import { loginUser } from "../../api/auth";

const Login = () => {
    const onFinish = async (values) => {
        try {
            const res = await loginUser({
                username: values.username,
                password: values.password
            });
            if (res.status === 200) {
                window.localStorage.setItem("userId", res.data.userId);
                window.localStorage.setItem("permissions", JSON.stringify(res.data.permissions));
                window.localStorage.setItem("role", res.data.role);
                window.location.reload();
            }
        } catch (e) {
            handleCatch(e);
        }
    };

    return (
        <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
            <HeaderComponent isLogedIn={false} />
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                style={{
                    maxWidth: 360,
                    marginTop: '40%'
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <StyledInput prefix={<User size={22} color="#000" />} placeholder="Username" style={{fontSize: "18px"}} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <StyledInput.Password prefix={<Lock size={22} color="#000" />} type="password" placeholder="Password" style={{height: "46px", fontSize: "18px"}} />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit" style={{height: "46px", marginBottom: "10px", backgroundColor: "green", fontSize: "16px"}}>
                        Log in
                    </Button>
                    or contact Abhishek for registration
                </Form.Item>
            </Form>
        </ColFlex>
    );
};

export default Login;
