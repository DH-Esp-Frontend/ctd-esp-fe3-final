export const ERROR_METHOD_NOT_ALLOWED = {
    error: 'METHOD_NOT_ALLOWED',
    message: "Method not allowed"
}

export const ERROR_CARD_WITHOUT_FUNDS = {
    error: 'CARD_WITHOUT_FUNDS',
    message: "The card doesn't have the require amount to do the transfer"
}

export const ERROR_CARD_WITHOUT_AUTHORIZATION = {
    error: 'CARD_WITHOUT_AUTHORIZATION',
    message: "The card cannot authorize the payment. Please call your bank before try again"
}

export const ERROR_CARD_DATA_INCORRECT = {
    error: 'CARD_DATA_INCORRECT',
    message: "The card data is not valid. Please review your data and submit it again"
}

export const ERROR_INCORRECT_ADDRESS = {
    error: 'INCORRECT_ADDRESS',
    message: "The address data is invalid. Please review your data and submit it again"
}

export const ERROR_SERVER = {
    error: 'SERVER_ERROR',
    message: "Server error. Please try again in a few seconds"
}