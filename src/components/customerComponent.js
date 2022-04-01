import {useDispatch, useSelector} from "react-redux";

const CustomerComponent = () => {

    const dispatch = useDispatch()
    const customers = useSelector(state => state.customerReduce.customers)

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch({type: "ADD_CUSTOMER", payload: customer})
    }

    const removeCustomer = (customer) => {
        dispatch({type: "REMOVE_CUSTOMER", payload: customer.id})
    }


    return (
        <div>
            Customers:
            <button onClick={() => addCustomer(prompt())}>Add customer</button>
            <button onClick={() => removeCustomer(prompt())}>Delete customer</button>
            {customers.map(customer =>
                <div onClick={() => removeCustomer(customer)}>
                    {customer.name}
                </div>
            )}
            <div>

            </div>
        </div>
    )
}

export default CustomerComponent