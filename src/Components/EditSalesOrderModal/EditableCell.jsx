import { useContext, useEffect, useRef, useState } from "react";
import { Form, Input, Select } from "antd";
import EditableContext from "./CommonContext";
import { ContainerTypes, ItemUnits } from "../../common-utils";

export const ItemTableEditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    allItems,
    itemNameToIdMap,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            switch(dataIndex) {
                case "itemId":
                    values.itemDetails = {
                        ...values.itemDetails,
                        name: itemNameToIdMap.get(values.itemId)
                    }
                    break;
                case "quantity":
                case "rate":
                    const { rate, quantity } = values;
                    values.itemTotal = ((rate || record.rate) * (quantity || record.quantity)) || 0;
                    break;
                default:
            }
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    const formField = () => {
        switch(dataIndex) {
            case "itemId":
                return <Select
                        showSearch
                        ref={inputRef}
                        optionFilterProp="label"
                        popupMatchSelectWidth={false}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={allItems}
                        onChange={save}
                        onBlur={save}
                    >
                    </Select>
            case "unit":
                return <Select 
                        placeholder="units"
                        style={{width: '100%'}}
                        onChange={save}
                        onBlur={save}
                    >
                        {ItemUnits.map(unit => (
                            <Select.Option key={unit} value={unit}>{unit}</Select.Option>
                        ))}
                    </Select>
            case "rate":
            case "quantity":
                return <Input ref={inputRef} onPressEnter={save} onBlur={save} type="number" />;
            default:
                return <Input ref={inputRef} onPressEnter={save} onBlur={save} />;
        }
    }
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[{ required: true, message: `${title} is required.` }]}
            >
                { formField() }
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingInlineEnd: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

export const ContainerTableEditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    allAgents,
    itemNameToIdMap,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    const formField = () => {
        switch(dataIndex) {
            case "type":
                return <Select
                        showSearch
                        ref={inputRef}
                        optionFilterProp="label"
                        popupMatchSelectWidth={false}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={ContainerTypes.map(type => ({label: type, value: type}))}
                        onChange={save}
                        onBlur={save}
                    >
                    </Select>
            case "quantity":
                return <Input ref={inputRef} onPressEnter={save} onBlur={save} type="number" />;
            default:
                return <Input ref={inputRef} onPressEnter={save} onBlur={save} />;
        }
    }
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[{ required: true, message: `${title} is required.` }]}
            >
                { formField() }
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingInlineEnd: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};