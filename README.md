# special

## Control

#### To run app:
1. Clone repo
2. Run: npm install
3. Run: node app input.json

#### To run tests:
1. Run: npm test

## Description

Program created using Node.

#### Program created for this situation:

Users want to cash in and/or cash out from their account. There are also commission fees for both cash in and cash out.

#### Task:

Calculate commission fees using API configurations for both operations.

#### Expected input and output

Input - objects in JSON file:
[
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } }
]

Output - calculated fees in each line for one operation:
0.06
0.90
87.00
