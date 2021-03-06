export const regPhoneFrench = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
export const regZipcodeFrench = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const isValidPhone = function(phone, lng="fr") {
    return regPhoneFrench.test(phone);
};

export const isValidZipcode = function(zipcode, lng="fr") {
    return regZipcodeFrench.test(zipcode);
};

export const isValidEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
