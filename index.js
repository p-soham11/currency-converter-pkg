/** @format */

import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
    "fca_live_QlAPPl7r1BRENfD4J2FDEgxQRAVKAYx5zX94qh5w"
);

export async function currencyConvertor(fromCurr, toCurr, units) {
    const response = await freecurrencyapi.latest({
        base_currency: fromCurr,
        currencies: toCurr,
    });
    const conversion = response.data[toCurr];
    // console.log(conversion * units);
    return conversion * units;
}
