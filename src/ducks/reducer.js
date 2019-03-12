const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
    }

//Action types
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_ESTATE_AGENT = "REAL_ESTATE_AGENT";
const UPDATE_COST = "COST";
const UPDATE_DOWN_PAYMENT = "DOWN_PAYMENT";
const UPDATE_CREDIT = "CREDIT";
const UPDATE_HISTORY = "HISTORY";
const UPDATE_ADDRESS_ONE = "ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_FIRST_NAME = "FIRST_NAME";
const UPDATE_LAST_NAME = "LAST_NAME";
const UPDATE_EMAIL = "EMAIL";



function reducer(state = initialState, action){
    switch( action.type ){
        case UPDATE_LOAN_TYPE:
            return {
                ...state,
                loanType: action.payload,
            };
        case UPDATE_PROPERTY_TYPE:
            return{
                ...state,
                propertyType: action.payload,
            };
        case UPDATE_CITY:
            return{
                ...state,
                city: action.payload,
            };
        case UPDATE_PROP:
            return{
                ...state,
                propToBeUsedOn: action.payload,
            };
        case UPDATE_FOUND:
            return{
                ...state,
                found: action.payload,
            };
        case UPDATE_REAL_ESTATE_AGENT :
        return{
            ...state,
            realEstateAgent: action.payload,
        };
        case UPDATE_COST:
        return{
            ...state,
            cost: action.payload,
        };
        case UPDATE_DOWN_PAYMENT:
        return{
            ...state,
            downPayment: action.payload,
        };
        case UPDATE_CREDIT:
        return{
            ...state,
            credit: action.payload,
        };
        case UPDATE_HISTORY:
        return{
            ...state,
            history: action.payload,
        };
        case UPDATE_ADDRESS_ONE:
        return{
            ...state,
            addressOne: action.payload,
        };
        case UPDATE_ADDRESS_TWO:
        return{
            ...state,
            addressTwo: action.payload,
        };
        case UPDATE_ADDRESS_THREE:
        return{
            ...state,
            addressThree: action.payload,
        };
        case UPDATE_FIRST_NAME:
        return{
            ...state,
            firstName: action.payload,
        };
        case UPDATE_LAST_NAME:
        return{
            ...state,
            lastName: action.payload,
        };
        case UPDATE_EMAIL:
        return{
            ...state,
            email: action.payload,
        };
        

        default: return state;

    }

}

export function updateLoanType(loanType) {
    return {
            type: UPDATE_LOAN_TYPE,
            payload: loanType,
        } 
}
export function updatePropertyType(property) {
    return {
            type: UPDATE_PROPERTY_TYPE,
            payload: property,
        }
}
export function updateCity(city) {
    return {
            type: UPDATE_CITY,
            payload: city,
        }
}
export function updateProp(prop){
    return{
        type: UPDATE_PROP,
        payload: prop,
    }
}
export function updateFound(found){
    return{
        type: UPDATE_FOUND,
        payload: found,
    }
}
export function updateRealEstateAgent(realEstateAgent){
    return{
        type:UPDATE_REAL_ESTATE_AGENT ,
        payload:realEstateAgent ,
    }
}
export function updateCost(cost){
    return{
        type: UPDATE_COST,
        payload: cost,
    }
}
export function updateDownPayment(downPayment){
    return{
        type: UPDATE_DOWN_PAYMENT,
        payload: downPayment,
    }
}
export function updateCredit(credit){
    return{
        type: UPDATE_CREDIT,
        payload: credit,
    }
}
export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history,
    }
}
export function updateAddressOne(addressOne){
    return{
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne,
    }
}
export function updateAddressTwo(addressTwo){
    return{
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo,
    }
}
export function updateAddressThree(addressThree){
    return{
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree,
    }
}
export function updateFirstName(firstName){
    return{
        type: UPDATE_FIRST_NAME,
        payload: firstName,
    }
}
export function updateLastName(lastName){
    return{
        type: UPDATE_LAST_NAME,
        payload: lastName,
    }
}
export function updateEmail(email){
    return{
        type: UPDATE_EMAIL,
        payload: email,
    }
}


export default reducer;